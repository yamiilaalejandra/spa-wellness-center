import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useReservas } from '../contexts/ReservasContext';
import './Dashboard.css';

const SERVICIOS = {
  'masaje-relajante': 'Masaje Relajante',
  'masaje-deportivo': 'Masaje Deportivo',
  'facial-premium': 'Facial Premium',
  'facial-hidratante': 'Facial Hidratante',
  'manicura-spa': 'Manicura SPA',
  'pedicura-spa': 'Pedicura SPA',
  'reflexologia': 'Reflexología',
  'hot-stone': 'Hot Stone',
  'aromaterapia': 'Aromaterapia',
  'meditacion': 'Meditación Guiada',
  'yoga-relajante': 'Yoga Relajante',
  'reiki': 'Reiki'
};

const PROFESIONALES = ['Carolina M.', 'Sofia T.', 'María G.', 'Ana R.'];

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { reservas, cancelarReserva, modificarReserva } = useReservas();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [formData, setFormData] = useState(null);

  const reservasActivas = reservas.filter(r => r.estado !== 'cancelada');

  const handleLogout = () => {
    if (window.confirm('¿Deseas cerrar sesión?')) {
      logout();
      navigate('/');
    }
  };

  const iniciarEdicion = (reserva) => {
    setEditandoId(reserva.id);
    setFormData({
      fecha: reserva.fecha,
      hora: reserva.hora
    });
    setMostrarFormulario(true);
  };

  const guardarCambios = () => {
    if (!formData.fecha || !formData.hora) {
      alert('Completa todos los campos');
      return;
    }

    modificarReserva(editandoId, formData);
    setEditandoId(null);
    setFormData(null);
    setMostrarFormulario(false);
  };

  const confirmarCancelacion = (reservaId) => {
    if (window.confirm('¿Estás seguro de que deseas cancelar esta reserva?')) {
      cancelarReserva(reservaId);
    }
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatearHora = (hora) => {
    return hora + ' hs';
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div className="header-content">
          <div>
            <h1>Mi Panel de Reservas</h1>
            <p>Bienvenido, {user?.nombre}!</p>
          </div>
          <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Información de usuario */}
        <div className="user-info-card">
          <h3>Información de tu Cuenta</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Nombre</span>
              <span className="value">{user?.nombre}</span>
            </div>
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="label">Teléfono</span>
              <span className="value">{user?.telefono}</span>
            </div>
            <div className="info-item">
              <span className="label">Reservas Activas</span>
              <span className="value badge">{reservasActivas.length}</span>
            </div>
          </div>
        </div>

        {/* Botón para nueva reserva */}
        <Link to="/reservas" className="btn btn-primary nueva-reserva-btn">
          + Nueva Reserva
        </Link>

        {/* Lista de reservas */}
        <div className="reservas-section">
          <h2>Mis Reservas</h2>

          {reservasActivas.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📅</div>
              <h3>No tienes reservas aún</h3>
              <p>¡Agenda tu primer servicio en Vibras Centro de Spa!</p>
              <Link to="/reservas" className="btn btn-primary">
                Agendar Ahora
              </Link>
            </div>
          ) : (
            <div className="reservas-grid">
              {reservasActivas.map(reserva => (
                <div key={reserva.id} className="reserva-card">
                  <div className="reserva-header">
                    <h3>{SERVICIOS[reserva.servicio] || reserva.servicio}</h3>
                    <span className="estado-badge">{reserva.estado}</span>
                  </div>

                  <div className="reserva-details">
                    <div className="detail-row">
                      <span className="label">📅 Fecha</span>
                      <span className="value">{formatearFecha(reserva.fecha)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">🕐 Hora</span>
                      <span className="value">{formatearHora(reserva.hora)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="label">👤 Profesional</span>
                      <span className="value">{reserva.profesional}</span>
                    </div>
                    {reserva.notas && (
                      <div className="detail-row">
                        <span className="label">📝 Notas</span>
                        <span className="value">{reserva.notas}</span>
                      </div>
                    )}
                  </div>

                  <div className="reserva-actions">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => iniciarEdicion(reserva)}
                    >
                      ✏️ Modificar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => confirmarCancelacion(reserva.id)}
                    >
                      ✖️ Cancelar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reservas canceladas */}
          {reservas.some(r => r.estado === 'cancelada') && (
            <div className="cancelled-reservas-section">
              <h3>Reservas Canceladas</h3>
              <div className="reservas-grid">
                {reservas
                  .filter(r => r.estado === 'cancelada')
                  .map(reserva => (
                    <div key={reserva.id} className="reserva-card cancelled">
                      <div className="reserva-header">
                        <h3>{SERVICIOS[reserva.servicio] || reserva.servicio}</h3>
                        <span className="estado-badge cancelled">{reserva.estado}</span>
                      </div>
                      <div className="reserva-details">
                        <div className="detail-row">
                          <span className="label">📅 Fecha</span>
                          <span className="value">{formatearFecha(reserva.fecha)}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">🕐 Hora</span>
                          <span className="value">{formatearHora(reserva.hora)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal de edición */}
        {mostrarFormulario && editandoId && (
          <div className="modal-overlay" onClick={() => !formData && setMostrarFormulario(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h2>Modificar Reserva</h2>

              <div className="form-group">
                <label>Nueva Fecha</label>
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={e => setFormData({ ...formData, fecha: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Nueva Hora</label>
                <select
                  value={formData.hora}
                  onChange={e => setFormData({ ...formData, hora: e.target.value })}
                >
                  <option value="">Selecciona una hora</option>
                  {['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'].map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary" onClick={guardarCambios}>
                  Guardar Cambios
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setEditandoId(null);
                    setFormData(null);
                    setMostrarFormulario(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
