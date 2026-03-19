import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand-custom text-decoration-none d-flex align-items-center gap-2" to="/">
          <img src="./imagenes/logo.png" alt="logo"className="navbar-logo" />
          IU DIGITAL CINE
        </Link>
        <div className="d-flex">
          <Link className="nav-link-custom text-decoration-none" to="/">Inicio</Link>
          <Link className="nav-link-custom text-decoration-none" to="/generos">Géneros</Link>
          <Link className="nav-link-custom text-decoration-none" to="/directores">Directores</Link>
          <Link className="nav-link-custom text-decoration-none" to="/productoras">Productoras</Link>
          <Link className="nav-link-custom text-decoration-none" to="/tipos">Tipos</Link>
          <Link className="nav-link-custom text-decoration-none" to="/medias">Películas</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;