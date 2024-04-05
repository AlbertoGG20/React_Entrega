import './Nav.css';
function Nav() {
  return (
    <nav className="nav-wrapper">
      <ul className="nav-ul">
        <li className="nav-content-wrapper"><a className="nav-content" href="#">Inicio</a></li>
        <li className="nav-content-wrapper"><a className="nav-content" href="#">Contacto</a></li>
        <li className="nav-content-wrapper"><a className="nav-content" href="#">Sobre Nosotros</a></li>
      </ul>
    </nav>
  )
} export default Nav;