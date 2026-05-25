import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const servicios = [
    {
      id: 1,
      nombre: 'Masajes Terapéuticos',
      descripcion: 'Relajación profunda y liberación de tensiones con técnicas tradicionales.',
      icono: '💆'
    },
    {
      id: 2,
      nombre: 'Faciales Luxe',
      descripcion: 'Tratamientos faciales con productos premium para una piel radiante.',
      icono: '✨'
    },
    {
      id: 3,
      nombre: 'Aromaterapia',
      descripcion: 'Experiencia sensorial con aceites esenciales puros y naturales.',
      icono: '🌿'
    },
    {
      id: 4,
      nombre: 'Spa Manos y Pies',
      descripcion: 'Cuidado integral y relajante para manos y pies.',
      icono: '🌸'
    }
  ];

  const testimonios = [
    {
      id: 1,
      nombre: 'María García',
      texto: 'Vibras es mi lugar favorito para desconectar. El ambiente, la atención y los tratamientos son simplemente excelentes.',
      rating: 5
    },
    {
      id: 2,
      nombre: 'Sofia López',
      texto: 'Cada visita es una experiencia de bienestar total. Los profesionales son muy dedicados y amables.',
      rating: 5
    },
    {
      id: 3,
      nombre: 'Ana Martínez',
      texto: 'Combina perfectamente el lujo con la calidez. Regresaré una y otra vez.',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="fade-in-up">Vibras Centro de Spa</h1>
            <p className="hero-subtitle fade-in-up">Armonía natural, lujo suave y bienestar total</p>
            <button className="btn btn-primary fade-in-up">
              <Link to="/reservas" style={{ color: 'inherit', textDecoration: 'none' }}>
                Reservar Turno
              </Link>
            </button>
          </div>
          <div className="hero-image fade-in">
            <div className="image-placeholder">
              <span>🧖‍♀️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="section-bg-light">
        <div className="container">
          <h2 className="text-center">Nuestros Servicios</h2>
          <p className="text-center section-subtitle">
            Descubre nuestros tratamientos diseñados para tu bienestar
          </p>
          <div className="grid grid-4">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="card card-light fade-in-up">
                <div className="service-icon">{servicio.icono}</div>
                <h3>{servicio.nombre}</h3>
                <p>{servicio.descripcion}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/servicios" className="btn btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section className="promotions">
        <div className="container">
          <h2 className="text-center">Promociones Especiales</h2>
          <div className="grid grid-2">
            <div className="promo-card slide-in-left">
              <div className="promo-icon">💝</div>
              <h3>Pack Relax</h3>
              <p>Masaje + Facial + Aromaterapia</p>
              <p className="promo-price">$199</p>
              <button className="btn btn-primary">Reservar</button>
            </div>
            <div className="promo-card slide-in-right">
              <div className="promo-icon">🎁</div>
              <h3>Membresía Anual</h3>
              <p>Acceso ilimitado a todos nuestros servicios</p>
              <p className="promo-price">$1,200</p>
              <button className="btn btn-primary">Más Info</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-bg-light testimonials">
        <div className="container">
          <h2 className="text-center">Lo Que Nuestros Clientes Dicen</h2>
          <div className="grid grid-3">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="testimonial-card fade-in-up">
                <div className="stars">
                  {'⭐'.repeat(testimonio.rating)}
                </div>
                <p className="testimonial-text">"{testimonio.texto}"</p>
                <p className="testimonial-author">— {testimonio.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>¿Listo para tu experiencia de bienestar?</h2>
          <p className="cta-subtitle">
            Reserva tu turno hoy y déjate envolver en armonía y relajación
          </p>
          <button className="btn btn-primary">Reservar Ahora</button>
        </div>
      </section>
    </div>
  );
}
