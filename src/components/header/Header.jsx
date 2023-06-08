import React from "react";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  return (
    <div id="main">
      <div className="header-heading">
        <h1>PAPELERA STORE</h1>
        <p className="details">Nuestro compromiso es ofrecerle</p>
        <p className="details">
          productos de la más alta calidad. 
          Garantizamos que nuestros productos
          cumplen con los estándares más altos de calidad, seguridad y
          satisfacción.
        </p>
        <div className="header-btns">
          <Link to="contact" smooth={true} duration={1000}>
            <button className="header-btn">HACENOS TU CONSULTA</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
