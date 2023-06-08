import React, { useState } from 'react'
import logo from "../../assets/papelera/logo_nav_papelera.png";
import { Link } from "react-scroll";
import "./navbar.css"

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };

  return (
    <nav>
        <Link to="main" className="logo"  smooth={true} duration={2000}>
            <img src={logo} alt="logo" className='img_finance'/>
            <span className='span_logo'>Papelera-Store</span>
        </Link>
        <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"} style={{color: "gray"}}></i>
      </div>
        <input className='menu-btn' type="checkbox" id="menu-btn" />
         <ul className={clicked ? "menu active" : "menu"}>
            <li><Link to="main" smooth={true} duration={1000}>Inicio</Link></li>
            <li><Link to="planes" smooth={true} duration={1000}>Servicios</Link></li>
            <li><Link to="parallax" smooth={true} duration={1000}>Productos</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contacto</Link></li>
         </ul>
        </nav>
  )
}

export default Navbar