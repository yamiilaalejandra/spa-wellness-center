import './Servicios.css';

export default function Servicios() {

  const servicios = [
    {
      id: 1,
      nombre: 'Masaje Sueco',
      categoria: 'Masajes',
      descripcion: 'Técnica clásica de relajación profunda que libera tensiones y mejora la circulación.',
      precio: '$80',
      duracion: '60 min',
      imagen: 'src/assets/img/espaldamasajes.jpg'
    },
    {
      id: 2,
      nombre: 'Masaje Tailandés',
      categoria: 'Masajes',
      descripcion: 'Antiguos técnica oriental combinando acupresión, flexibilidad y meditación.',
      precio: '$90',
      duracion: '60 min',
      imagen: 'src/assets/img/lugarlindo.jpg'
    },
    {
      id: 3,
      nombre: 'Masaje Aromático',
      categoria: 'Masajes',
      descripcion: 'Masaje relajante con aceites esenciales que potencian el bienestar emocional.',
      precio: '$85',
      duracion: '60 min',
      imagen: 'src/assets/img/masajesconaroma.jpg'
    },
    {
      id: 4, nombre: 'Facial Hidratante',
      categoria: 'Faciales',
      descripcion: 'Tratamiento profundo que hidrata y nutre la piel con productos premium.',
      precio: '$75',
      duracion: '50 min',
      imagen: 'src/assets/img/mascarilladecara.jpg'
    },

    {
      id: 5, nombre: 'Facial Antiedad',
      categoria: 'Faciales',
      descripcion: 'Tratamiento intensivo que reduce líneas de expresión y potencia la elasticidad.',
      precio: '$95',
      duracion: '60 min',
      imagen: 'src/assets/img/mascarillacara.jpg'
    },

    {
      id: 6, nombre: 'Limpieza Profunda',
      categoria: 'Faciales',
      descripcion: 'Purificación e hidratación de la piel con técnicas de exfoliación suave.',
      precio: '$65',
      duracion: '45 min',
      imagen: 'src/assets/img/mascarilla.jpg'
    },

    {
      id: 7, nombre: 'Sesión Aromaterapia',
      categoria: 'Aromaterapia',
      descripcion: 'Experiencia sensorial con difusores y aceites esenciales puros.',
      precio: '$60',
      duracion: '45 min',
      imagen: 'src/assets/img/relaxbañera.jpg'
    },

    {
      id: 8, nombre: 'Baño Aromático',
      categoria: 'Aromaterapia',
      descripcion: 'Inmersión relajante con sales aromáticas y pétalos de flores.',
      precio: '$70',
      duracion: '60 min',
      imagen: 'src/assets/img/bañera.jpg'
    },

    {
      id: 9, nombre: 'Manicura Spa',
      categoria: 'Manos y Pies',
      descripcion: 'Cuidado integral de manos con tratamiento hidratante y esmaltado premium.',
      precio: '$50',
      duracion: '45 min',
      imagen: 'src/assets/img/centroimagen.jpg'
    },

    {
      id: 10, nombre: 'Pedicura Spa',
      categoria: 'Manos y Pies',
      descripcion: 'Tratamiento rejuvenecedor para pies con masaje reflexológico.',
      precio: '$55',
      duracion: '50 min',
      imagen: 'src/assets/img/masajesdepies.jpg'
    },

    {
      id: 11, nombre: 'Body Scrub',
      categoria: 'Tratamientos Corporales',
      descripcion: 'Exfoliación suave que elimina células muertas y suaviza la piel.',
      precio: '$65',
      duracion: '45 min',
      imagen: 'src/assets/img/exfoliantedeespalda.jpg'
    },

    {
      id: 12, nombre: 'Body Wrap Mineral',
      categoria: 'Tratamientos Corporales',
      descripcion: 'Envoltura mineral que detoxifica, hidrata y tonifica el cuerpo.',
      precio: '$85',
      duracion: '60 min',
      imagen: 'src/assets/img/masajesconaceites.jpg'
    }];

  const categorias = ['Todos', ...new Set(servicios.map(s => s.categoria))];

  return (
    <div className="servicios-page">

      {/* Hero */}
      <section className="servicios-hero">
        <div className="container">
          <h1>Nuestros Servicios</h1>

          <p>
            Descubre nuestro catálogo completo de tratamientos
            diseñados para tu bienestar integral
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="servicios-grid">
        <div className="container">

          <div className="grid grid-3">

            {servicios.map((servicio) => (

              <div
                key={servicio.id}
                className="card service-card fade-in-up"
              >

                {/* Imagen */}
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  className="service-image"
                />

                {/* Header */}
                <div className="service-header">

                  <span className="service-icono">
                    {servicio.icono}
                  </span>

                  <span className="service-categoria">
                    {servicio.categoria}
                  </span>

                </div>

                <h3>{servicio.nombre}</h3>

                <p className="service-descripcion">
                  {servicio.descripcion}
                </p>

                <div className="service-info">
                  <span className="info-item">
                    ⏱️ {servicio.duracion}
                  </span>
                </div>

                <div className="service-footer">

                  <span className="service-precio">
                    {servicio.precio}
                  </span>

                  <button className="btn btn-primary btn-small">
                    Reservar
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-bg-light packages">
        <div className="container">

          <h2 className="text-center">
            Paquetes y Promociones
          </h2>

          <div className="grid grid-2">

            {/* Pack Relax */}
            <div className="package-card fade-in-up">

              <img
                src="src/assets/img/masajesenpareja.jpg"
                alt="Pack Relax"
                className="package-image"
              />

              <div className="package-content">
                <h3>💝 Pack Relax</h3>

                <p>
                  Masaje Sueco + Facial Hidratante + Aromaterapia <br /> + Manicura Spa
                </p>

                <p className="package-price">$199</p>

                <button className="btn btn-primary">
                  Seleccionar
                </button>
              </div>

            </div>

            {/* Pack Lujo */}
            <div className="package-card fade-in-up">

              <img
                src="src/assets/img/mascaradecara.jpg"
                alt="Pack Lujo Total"
                className="package-image"
              />

              <div className="package-content">
                <h3>👑 Pack Lujo Total</h3>

                <p>
                  Masaje Tailandés + Facial Antiedad + Body Scrub + Manicura Spa
                </p>

                <p className="package-price">$299</p>

                <button className="btn btn-primary">
                  Seleccionar
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}