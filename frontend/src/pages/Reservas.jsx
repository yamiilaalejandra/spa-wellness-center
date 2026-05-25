import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useReservas } from '../contexts/ReservasContext';
import './Reservas.css';

export default function Reservas() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { crearReserva } = useReservas();

  const [formData, setFormData] = useState({
    servicio: '',
    fecha: '',
    hora: '',
    profesional: '',
    notas: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const servicios = [
    { id: 'masaje-relajante', nombre: 'Masaje Relajante' },
    { id: 'masaje-deportivo', nombre: 'Masaje Deportivo' },
    { id: 'facial-premium', nombre: 'Facial Premium' },
    { id: 'facial-hidratante', nombre: 'Facial Hidratante' },
    { id: 'manicura-spa', nombre: 'Manicura SPA' },
    { id: 'pedicura-spa', nombre: 'Pedicura SPA' },
    { id: 'reflexologia', nombre: 'Reflexología' },
    { id: 'hot-stone', nombre: 'Hot Stone' },
    { id: 'aromaterapia', nombre: 'Aromaterapia' },
    { id: 'meditacion', nombre: 'Meditación Guiada' },
    { id: 'yoga-relajante', nombre: 'Yoga Relajante' },
    { id: 'reiki', nombre: 'Reiki' }
  ];

  const profesionales = [
    'Carolina M.',
    'Sofia T.',
    'María G.',
    'Ana R.'
  ];

  const horarios = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

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

    // Validaciones
    if (!formData.servicio) {
      setError('Selecciona un servicio');
      setLoading(false);
      return;
    }

    if (!formData.fecha) {
      setError('Selecciona una fecha');
      setLoading(false);
      return;
    }

    if (!formData.hora) {
      setError('Selecciona una hora');
      setLoading(false);
      return;
    }

    if (!formData.profesional) {
      setError('Selecciona un profesional');
      setLoading(false);
      return;
    }

    // Crear reserva
    const result = crearReserva(formData);

    if (result.success) {
      alert('¡Reserva confirmada! Te redirigimos a tu panel.');
      setTimeout(() => navigate('/dashboard'), 1500);
    } else {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="reservas-page">
      {/* Hero */}
      <section className="reservas-hero">
        <div className="container">
          <h1>Reserva Tu Turno</h1>
          <p>Solo usuarios registrados pueden hacer reservas</p>
        </div>
      </section>

      {/* Comprobación de autenticación */}
      {!isAuthenticated ? (
        <section className="reservas-form-section">
          <div className="container">
            <div className="auth-required">
              <h2>Debes iniciar sesión</h2>
              <p>Para agendar un turno en Vibras Centro de Spa, necesitas tener una cuenta registrada.</p>
              <div className="auth-buttons">
                <button className="btn btn-primary" onClick={() => navigate('/login')}>
                  Iniciar Sesión
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/register')}>
                  Crear Cuenta
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="reservas-form-section">
          <div className="container">
            {/* Tarjeta de bienvenida */}
            <div className="user-welcome-card">
              <h3>Bienvenido, {user?.nombre}! 👋</h3>
              <p>Completa el formulario para agendar tu turno</p>
            </div>

            <div className="form-container">
              <form onSubmit={handleSubmit} className="reservas-form">
                {error && <div className="error-message">{error}</div>}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="servicio">Servicio *</label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map(serv => (
                        <option key={serv.id} value={serv.id}>{serv.nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="profesional">Profesional *</label>
                    <select
                      id="profesional"
                      name="profesional"
                      value={formData.profesional}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Selecciona profesional</option>
                      {profesionales.map(prof => (
                        <option key={prof} value={prof}>{prof}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fecha">Fecha *</label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hora">Hora *</label>
                    <select
                      id="hora"
                      name="hora"
                      value={formData.hora}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Selecciona hora</option>
                      {horarios.map(h => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="notas">Notas Especiales (Alergias, preferencias, etc.)</label>
                  <textarea
                    id="notas"
                    name="notas"
                    value={formData.notas}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Cuéntanos cualquier información importante..."
                    disabled={loading}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
                  {loading ? 'Confirmando...' : 'Confirmar Reserva'}
                </button>
              </form>
            </div>

            {/* Info lateral */}
            <div className="reservas-info">
              <div className="info-card fade-in-up">
                <h3>📞 ¿Necesitas Ayuda?</h3>
                <p>Si prefieres reservar por teléfono o WhatsApp, contáctanos:</p>
                <a href="tel:+5491234567890" className="btn btn-secondary">
                  Llamar
                </a>
                <a href="https://wa.me/5491234567890" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  WhatsApp
                </a>
              </div>

              <div className="info-card fade-in-up">
                <h3>⏰ Horarios</h3>
                <p>
                  Lunes - Viernes: 09:00 - 20:00<br />
                  Sábados: 10:00 - 19:00<br />
                  Domingos: 10:00 - 18:00
                </p>
              </div>

              <div className="info-card fade-in-up">
                <h3>📍 Ubicación</h3>
                <p>
                  Av. Libertad 1234<br />
                  Buenos Aires, Argentina<br />
                  Líneas A, B, C Cercanas
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Políticas */}
      <section className="section-bg-light policies">
        <div className="container">
          <h2 className="text-center">Políticas de Reserva</h2>
          <div className="grid grid-2">
            <div className="policy-item">
              <h4>✓ Confirmación</h4>
              <p>Recibirás una confirmación y podrás ver tu reserva en tu panel personal.</p>
            </div>
            <div className="policy-item">
              <h4>✓ Cancelaciones</h4>
              <p>Puedes cancelar o modificar con 24 horas de anticipación desde tu panel.</p>
            </div>
            <div className="policy-item">
              <h4>✓ Puntualidad</h4>
              <p>Te recomendamos llegar 15 minutos antes de tu cita para mejor disposición.</p>
            </div>
            <div className="policy-item">
              <h4>✓ Métodos de Pago</h4>
              <p>Aceptamos efectivo, tarjeta de crédito/débito, transferencias bancarias y billeteras digitales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
