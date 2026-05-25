import './Nosotros.css';

export default function Nosotros() {
  const valores = [
    {
      id: 1,
      titulo: 'Bienestar Integral',
      descripcion: 'Creemos en el equilibrio entre cuerpo, mente y espíritu como base de la salud verdadera.',
      icono: '🧘'
    },
    {
      id: 2,
      titulo: 'Naturalidad',
      descripcion: 'Utilizamos productos naturales y técnicas ancestrales respetuosas con el medio ambiente.',
      icono: '🌿'
    },
    {
      id: 3,
      titulo: 'Excelencia',
      descripcion: 'Nuestro equipo está compuesto por profesionales certificados y altamente capacitados.',
      icono: '✨'
    },
    {
      id: 4,
      titulo: 'Calidez Humana',
      descripcion: 'Tratamos a cada cliente con atención personalizada y genuino cuidado.',
      icono: '💝'
    }
  ];

  const equipo = [
    {
      id: 1,
      nombre: 'Laura Pérez',
      especialidad: 'Directora y Terapeuta Principal',
      bio: 'Con más de 15 años de experiencia en wellness, Laura combina técnicas ancestrales con conocimientos modernos.',
      foto: '👩‍⚕️'
    },
    {
      id: 2,
      nombre: 'Sofía García',
      especialidad: 'Masajista Certificada',
      bio: 'Especialista en masajes tailandeses y aromaterapia, con formación en Tailandia.',
      foto: '💆‍♀️'
    },
    {
      id: 3,
      nombre: 'María López',
      especialidad: 'Esteticista Premium',
      bio: 'Experta en tratamientos faciales y cuidado de la piel con productos de lujo europeos.',
      foto: '✨'
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      especialidad: 'Reflexóloga',
      bio: 'Especializada en reflexología y masajes podales terapéuticos.',
      foto: '👣'
    }
  ];

  return (
    <div className="nosotros-page">
      {/* Hero */}
      <section className="nosotros-hero">
        <div className="container">
          <h1>Sobre Vibras</h1>
          <p>Más que un spa, una filosofía de vida dedicada a tu bienestar</p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="historia">
        <div className="container">
          <div className="historia-content">
            <div className="historia-text fade-in-up">
              <h2>Nuestra Historia</h2>
              <p>
                Vibras nació de la pasión por crear un espacio donde el lujo y la naturalidad convergen en armonía. 
                Fundado en 2018, comenzó como un pequeño rincón de relajación y se ha transformado en un centro 
                premium reconocido por la excelencia de sus servicios.
              </p>
              <p>
                Cada tratamiento está diseñado meticulosamente para ofrecer no solo relajación física, sino también 
                una conexión profunda con el bienestar emocional y espiritual. Creemos que el verdadero lujo es sentirse 
                bien, renovado y en paz.
              </p>
              <p>
                Nuestro compromiso es ofrecer experiencias transformadoras usando productos naturales de la más alta 
                calidad y técnicas que respetan tanto el cuerpo como el medio ambiente.
              </p>
            </div>
            <div className="historia-image fade-in">
              <div className="image-box">
                <span>🌺</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-bg-light valores">
        <div className="container">
          <h2 className="text-center">Nuestros Valores</h2>
          <div className="grid grid-2">
            {valores.map(valor => (
              <div key={valor.id} className="valor-card fade-in-up">
                <div className="valor-icon">{valor.icono}</div>
                <h3>{valor.titulo}</h3>
                <p>{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="equipo">
        <div className="container">
          <h2 className="text-center">Nuestro Equipo</h2>
          <p className="text-center section-subtitle">
            Profesionales dedicados a tu bienestar integral
          </p>
          <div className="grid grid-2">
            {equipo.map(miembro => (
              <div key={miembro.id} className="team-card fade-in-up">
                <div className="team-avatar">{miembro.foto}</div>
                <h3>{miembro.nombre}</h3>
                <p className="team-specialty">{miembro.especialidad}</p>
                <p className="team-bio">{miembro.bio}</p>
                <button className="btn btn-secondary btn-small">Agendar con {miembro.nombre.split(' ')[0]}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Qué Elegirnos */}
      <section className="section-bg-light why-us">
        <div className="container">
          <h2 className="text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-3">
            <div className="benefit-card fade-in-up">
              <h3>🏆 Premium Quality</h3>
              <p>Utilizamos solo productos de la más alta calidad importados de Europa y Asia.</p>
            </div>
            <div className="benefit-card fade-in-up">
              <h3>👥 Atención Personalizada</h3>
              <p>Cada cliente es único. Personalizamos cada tratamiento según tus necesidades.</p>
            </div>
            <div className="benefit-card fade-in-up">
              <h3>🌿 100% Natural</h3>
              <p>Productos sin químicos nocivos, respetuosos con tu piel y el planeta.</p>
            </div>
            <div className="benefit-card fade-in-up">
              <h3>⭐ Experiencia</h3>
              <p>Más de 15 años de experiencia combinando tradición y modernidad.</p>
            </div>
            <div className="benefit-card fade-in-up">
              <h3>🕯️ Ambiente Relajante</h3>
              <p>Diseñado con cada detalle para transportarte a un estado de paz absoluta.</p>
            </div>
            <div className="benefit-card fade-in-up">
              <h3>💎 Lujo Accesible</h3>
              <p>Premium sin pretensiones. Lujo que es accesible para todos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="galeria">
        <div className="container">
          <h2 className="text-center">Nuestro Espacio</h2>
          <div className="grid grid-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="galeria-item fade-in-up">
                <div className="galeria-placeholder">
                  {i === 1 && '🧖‍♀️'}
                  {i === 2 && '🕯️'}
                  {i === 3 && '🌸'}
                  {i === 4 && '💆'}
                  {i === 5 && '🌿'}
                  {i === 6 && '✨'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
