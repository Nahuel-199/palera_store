import React from "react";
import logo from "../../assets/papelera/logo_nav_papelera.png";
import "./footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={logo} alt="logo" className="img_footer" />
          <span className="span_footer">PAPELERA STORE</span>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Inicio
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
              Servicios
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Vision
            </a>
          </li>

          <li>
            <a href="#Skills" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/herreriayconstrusccionelorion/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram instagram"></i>
          </a>

          <a
            href="https://walink.co/31b0ff"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp" style={{ color: "green" }}></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100091941567683"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i
              class="bx bxl-facebook-circle"
              style={{ color: "#0000ffb0" }}
            ></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
