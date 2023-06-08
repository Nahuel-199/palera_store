import React from "react";
import mq from "../../assets/papelera/logo_flotante.png";
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Nuestra Misión.</h2>
      <span className="section__subtitle">
        Comprometidos con la satisfacción de nuestros clientes y con el
        mejoramiento continuo de nuestros procesos. Utilizamos la mejor
        tecnología y los mejores materiales para asegurar que nuestros productos
        cumplan con los más altos niveles de calidad y durabilidad
      </span>
      <div className="about__container container grid">
        <img src={mq} alt="about" className="img_finance2" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Ofrecemos nuestros trabajos con el mejor precio y servicio, para que
            nuestros clientes queden satisfechos con el resultado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
