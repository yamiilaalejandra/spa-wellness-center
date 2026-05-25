import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vibras Centro de Spa</h3>
            <p>Armonía natural, lujo suave y bienestar total.</p>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#reservas">Reservas</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Información</h4>
            <ul>
              <li><a href="tel:+5491234567890">+54 9 123 456 7890</a></li>
              <li><a href="mailto:info@vibras.spa">info@vibras.spa</a></li>
            </ul>
          </div>

          <div className="footer-section">


            <h4>Síguenos</h4>

            <div className="social-links">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="src/assets/instagram.png" alt="Instagram" />
              </a>

              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="src/assets/whatsapp.png" alt="WhatsApp" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src="src/assets/facebook.png" alt="Facebook" />
              </a>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vibras Centro de Spa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
