import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.email.trim()) {
      setError('Por favor ingresa tu email');
      setLoading(false);
      return;
    }

    if (!formData.password.trim()) {
      setError('Por favor ingresa tu contraseña');
      setLoading(false);
      return;
    }

    // Intentar login
    const result = login(formData.email, formData.password);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  // Credenciales demo
  const useDemoCredentials = () => {
    setFormData({
      email: 'demo@vibras.com',
      password: 'demo123'
    });
  };

  React.useEffect(() => {
    // Crear cuenta demo si no existe
    const users = JSON.parse(localStorage.getItem('vibrasSpaUsers') || '[]');
    if (!users.find(u => u.email === 'demo@vibras.com')) {
      users.push({
        id: 'demo-user',
        email: 'demo@vibras.com',
        password: 'demo123',
        nombre: 'Usuario Demo',
        telefono: '+34 666 666 666',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('vibrasSpaUsers', JSON.stringify(users));
    }
  }, []);

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-benefits">
          <h2>Bienvenido a tu Espacio Privado</h2>
          <p>Accede a tu panel de reservas y gestiona tus turnos</p>
          <ul>
            <li>🗓️ Consulta tus reservas</li>
            <li>✏️ Modifica tus turnos</li>
            <li>✖️ Cancela cuando necesites</li>
            <li>💌 Recibe recordatorios</li>
            <li>⭐ Acceso a ofertas exclusivas</li>
          </ul>
        </div>

        <div className="login-content">
          <div className="login-header">
            <h1>Iniciar Sesión</h1>
            <p>En Vibras Centro de Spa</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                disabled={loading}
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Tu contraseña"
                disabled={loading}
              />
            </div>

            <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="demo-section">
            <p className="divider">O prueba con credenciales demo</p>
            <button 
              type="button" 
              className="btn btn-secondary demo-btn" 
              onClick={useDemoCredentials}
              disabled={loading}
            >
              Usar Demo: demo@vibras.com
            </button>
          </div>

          <div className="login-footer">
            <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
