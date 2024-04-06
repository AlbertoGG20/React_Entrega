import { useState } from "react";
import './Header.css';

function Header() {
  const [head, setHead] = useState(false);
  const [active, setActive] = useState(false);

  const change = () => {
    if (window.scrollY > 520) {
      setHead(true);
    }
    else {
      setHead(false);
    }
  };

  const activ = () => {
    if (active == false) {
      setActive(true);
    }
  };

  const desactiv = () => {
    if (active == true) {
      setActive(false);
    }
  };

  window.addEventListener('scroll', change);


  return (
    <header className={head ? 'header-wrapper show-back' : 'header-wrapper'}>
      <div className="header-logo-wrapper">
        <a href="/"><img className="header-logo-img" src="public/img/logo.png" alt="logo" /></a>
      </div>
      <svg onClick={activ} className={head ? 'header-menu-buttom color-hamburguer' : 'header-menu-buttom'} width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke='none' clip-rule="evenodd" d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H30.5C30.8978 0 31.2794 0.158035 31.5607 0.43934C31.842 0.720644 32 1.10218 32 1.5C32 1.89782 31.842 2.27936 31.5607 2.56066C31.2794 2.84196 30.8978 3 30.5 3H1.5C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5ZM0 10C0 9.60218 0.158035 9.22064 0.43934 8.93934C0.720644 8.65804 1.10218 8.5 1.5 8.5H30.5C30.8978 8.5 31.2794 8.65804 31.5607 8.93934C31.842 9.22064 32 9.60218 32 10C32 10.3978 31.842 10.7794 31.5607 11.0607C31.2794 11.342 30.8978 11.5 30.5 11.5H1.5C1.10218 11.5 0.720644 11.342 0.43934 11.0607C0.158035 10.7794 0 10.3978 0 10ZM1.5 17C1.10218 17 0.720644 17.158 0.43934 17.4393C0.158035 17.7206 0 18.1022 0 18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H30.5C30.8978 20 31.2794 19.842 31.5607 19.5607C31.842 19.2794 32 18.8978 32 18.5C32 18.1022 31.842 17.7206 31.5607 17.4393C31.2794 17.158 30.8978 17 30.5 17H1.5Z" fill="currentColor" />
      </svg>
      <nav className={active ? 'nav-wrapper active' : 'nav-wrapper'}>
        <svg onClick={desactiv} className="nav-close" width="24" height="24" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" d="M57.757 51.7964C58.5484 52.5877 58.993 53.661 58.993 54.7802C58.993 55.8994 58.5484 56.9727 57.757 57.764C56.9655 58.5554 55.8922 59 54.7729 59C53.6537 59 52.5803 58.5554 51.7889 57.764L29.5 35.4694L7.20407 57.757C6.41266 58.5484 5.33927 58.993 4.22005 58.993C3.10082 58.993 2.02744 58.5484 1.23602 57.757C0.444611 56.9657 1.1793e-08 55.8923 0 54.7732C-1.1793e-08 53.654 0.444611 52.5807 1.23602 51.7893L23.532 29.5018L1.24304 7.20715C0.451631 6.41579 0.00702138 5.34247 0.00702139 4.22331C0.00702141 3.10415 0.451631 2.03083 1.24304 1.23946C2.03446 0.448095 3.10784 0.00350983 4.22707 0.00350982C5.34629 0.00350981 6.41968 0.448095 7.21109 1.23946L29.5 23.5341L51.7959 1.23595C52.5873 0.444584 53.6607 -1.86452e-08 54.7799 0C55.8992 1.86452e-08 56.9726 0.444584 57.764 1.23595C58.5554 2.02731 59 3.10064 59 4.2198C59 5.33896 58.5554 6.41228 57.764 7.20364L35.468 29.5018L57.757 51.7964Z" fill="currentColor" />
        </svg>
        <ul className="nav-ul">
          <li className="nav-content-wrapper"><a className="nav-content" href="/">Inicio</a></li>
          <li className="nav-content-wrapper"><a className="nav-content" href="#">Contacto</a></li>
          <li className="nav-content-wrapper"><a className="nav-content" href="#">Sobre Nosotros</a></li>
        </ul>
      </nav>
    </header>
  )
} export default Header;


