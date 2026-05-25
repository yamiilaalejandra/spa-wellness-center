import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✧</span> Vibras
        </Link>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link to="/servicios" className="nav-link" onClick={() => setMenuOpen(false)}>
            Servicios
          </Link>
          <Link to="/reservas" className="nav-link" onClick={() => setMenuOpen(false)}>
            Reservas
          </Link>
          <Link to="/nosotros" className="nav-link" onClick={() => setMenuOpen(false)}>
            Nosotros
          </Link>
          <Link to="/contacto" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>

          {/* Opciones de autenticación */}
          <div className="nav-auth">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="nav-link dashboard-link" onClick={() => setMenuOpen(false)}>
                  📊 {user?.nombre}
                </Link>
                <button className="nav-logout-btn" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>
                  Iniciar Sesión
                </Link>
                <Link to="/register" className="nav-link nav-register" onClick={() => setMenuOpen(false)}>
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
