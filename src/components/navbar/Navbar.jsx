import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/papelera/logo_nav_papelera.png';
import './navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <ScrollLink to="main" className="logo" smooth={true} duration={2000}>
        <img src={logo} alt="logo" className="img_finance" />
        <span className="span_logo">Papelera-Store</span>
      </ScrollLink>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} style={{ color: 'gray' }}></i>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <ul className={clicked ? 'menu active' : 'menu'}>
        <li>
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li>
          <ScrollLink to="planes" smooth={true} duration={1000}>
            Servicios
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/products" smooth={true} duration={1000}>
            Productos
          </RouterLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={1000}>
            Contacto
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
