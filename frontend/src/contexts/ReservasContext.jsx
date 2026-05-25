import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const ReservasContext = createContext(null);

export const ReservasProvider = ({ children }) => {
  const { user } = useAuth();
  const [reservas, setReservas] = useState([]);

  // Cargar reservas del usuario cuando inicie sesión
  useEffect(() => {
    if (user) {
      const savedReservas = JSON.parse(localStorage.getItem(`vibrasSpaReservas_${user.id}`) || '[]');
      setReservas(savedReservas);
    } else {
      setReservas([]);
    }
  }, [user]);

  const crearReserva = (datosReserva) => {
    if (!user) {
      return { success: false, error: 'Debes iniciar sesión para hacer una reserva' };
    }

    const nuevaReserva = {
      id: Date.now().toString(),
      ...datosReserva,
      userId: user.id,
      estado: 'confirmada', // confirmada, pendiente, cancelada
      createdAt: new Date().toISOString(),
      fechaReserva: new Date(datosReserva.fecha + 'T' + datosReserva.hora).toISOString()
    };

    const nuevasReservas = [...reservas, nuevaReserva];
    setReservas(nuevasReservas);
    localStorage.setItem(`vibrasSpaReservas_${user.id}`, JSON.stringify(nuevasReservas));

    return { success: true, reserva: nuevaReserva };
  };

  const cancelarReserva = (reservaId) => {
    const nuevasReservas = reservas.map(r =>
      r.id === reservaId ? { ...r, estado: 'cancelada' } : r
    );
    setReservas(nuevasReservas);
    localStorage.setItem(`vibrasSpaReservas_${user.id}`, JSON.stringify(nuevasReservas));

    return { success: true };
  };

  const modificarReserva = (reservaId, datosActualizados) => {
    const nuevasReservas = reservas.map(r =>
      r.id === reservaId
        ? {
            ...r,
            ...datosActualizados,
            fechaReserva: new Date(datosActualizados.fecha + 'T' + datosActualizados.hora).toISOString()
          }
        : r
    );
    setReservas(nuevasReservas);
    localStorage.setItem(`vibrasSpaReservas_${user.id}`, JSON.stringify(nuevasReservas));

    return { success: true };
  };

  const obtenerReservasActivas = () => {
    return reservas.filter(r => r.estado !== 'cancelada');
  };

  const value = {
    reservas,
    crearReserva,
    cancelarReserva,
    modificarReserva,
    obtenerReservasActivas
  };

  return (
    <ReservasContext.Provider value={value}>
      {children}
    </ReservasContext.Provider>
  );
};

export const useReservas = () => {
  const context = useContext(ReservasContext);
  if (!context) {
    throw new Error('useReservas debe usarse dentro de ReservasProvider');
  }
  return context;
};
