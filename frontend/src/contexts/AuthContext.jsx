import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay usuario guardado al montar
  useEffect(() => {
    const savedUser = localStorage.getItem('vibrasSpaUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error loading user:', error);
        localStorage.removeItem('vibrasSpaUser');
      }
    }
    setLoading(false);
  }, []);

  const register = (email, password, nombre, telefono) => {
    // Verificar si el email ya existe
    const users = JSON.parse(localStorage.getItem('vibrasSpaUsers') || '[]');
    if (users.some(u => u.email === email)) {
      return { success: false, error: 'Este email ya está registrado' };
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // En producción, esto se hashearía en el backend
      nombre,
      telefono,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('vibrasSpaUsers', JSON.stringify(users));

    // Iniciar sesión automáticamente
    const userSession = { id: newUser.id, email, nombre, telefono };
    setUser(userSession);
    localStorage.setItem('vibrasSpaUser', JSON.stringify(userSession));

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('vibrasSpaUsers') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (!foundUser) {
      return { success: false, error: 'Email o contraseña incorrectos' };
    }

    const userSession = {
      id: foundUser.id,
      email: foundUser.email,
      nombre: foundUser.nombre,
      telefono: foundUser.telefono
    };

    setUser(userSession);
    localStorage.setItem('vibrasSpaUser', JSON.stringify(userSession));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vibrasSpaUser');
  };

  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    loading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
