import { useState } from 'react';
import './Contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto-page">
      {/* Hero */}
      <section className="contacto-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p>¿Preguntas? Nos encantaría saber de ti. Estamos aquí para ayudarte.</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="contacto-content">
        <div className="container">
          {/* Formulario */}
          <div className="contacto-form">
            <h2>Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 123 456 7890"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Cuéntanos tu pregunta o comentario..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Info Contacto */}
          <div className="contacto-info">
            <div className="info-section">
              <h2>Información de Contacto</h2>

              <div className="info-item fade-in-up">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>
                    Avenida Libertad 1234<br />
                    Buenos Aires, C1005 Argentina<br />
                    Subte Líneas A, B, C
                  </p>
                </div>
              </div>

              <div className="info-item fade-in-up">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Teléfono</h4>
                  <p>
                    <a href="tel:+5491234567890">+54 9 (11) 1234-5678</a><br />
                    <a href="tel:+5491187654321">+54 9 (11) 1234-5678</a>
                  </p>
                </div>
              </div>

              <div className="info-item fade-in-up">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@vibras.spa">info@vibras.spa</a><br />
                    <a href="mailto:reservas@vibras.spa">reservas@vibras.spa</a>
                  </p>
                </div>
              </div>


              <div className="social-section fade-in-up">
                <h4>Síguenos</h4>

                <div className="social-icons">

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img
                      src="/assets/social/instagram.png"
                      alt="Instagram"
                    />
                  </a>

                  <a
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img
                      src="/assets/social/whatsapp.png"
                      alt="WhatsApp"
                    />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img
                      src="/assets/social/facebook.png"
                      alt="Facebook"
                    />
                  </a>

                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <img
                      src="/assets/social/tiktok.png"
                      alt="TikTok"
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="mapa-section">
        <div className="container">
          <h2 className="text-center">Encuentranos en el Mapa</h2>
          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.0839263881866!2d-58.37717!3d-34.60369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335e89a98a1f1%3A0x7a8a2a2a2a2a2a2a!2sAv.%20Libertad%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1625000000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación Vibras Spa"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-bg-light">
        <div className="container">
          <h2 className="text-center">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item fade-in-up">
              <h4>¿Cómo hago una reserva?</h4>
              <p>Puedes reservar a través de nuestro formulario en línea, llamando al teléfono o enviando un WhatsApp. Te confirmaremos tu cita por email.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h4>¿Cuál es la política de cancelación?</h4>
              <p>Puedes cancelar o reprogramar sin cargos con 24 horas de anticipación. Después de eso, se aplica un cargo del 50%.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h4>¿Qué debo llevar?</h4>
              <p>Solo trae tu tarjeta de identificación. Nosotros proporcionamos batas, sandalias y artículos de tocador.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h4>¿Hay estacionamiento?</h4>
              <p>Sí, hay estacionamiento en el edificio. También estamos muy cerca de las líneas A, B y C del subte.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h4>¿Aceptan tarjetas?</h4>
              <p>Sí, aceptamos todos los métodos: efectivo, tarjeta de crédito/débito, transferencia bancaria y billeteras digitales.</p>
            </div>
            <div className="faq-item fade-in-up">
              <h4>¿Hay promociones especiales?</h4>
              <p>Sí, ofrecemos paquetes, membresías anuales y promociones especiales. Consulta por nuestras ofertas actuales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
