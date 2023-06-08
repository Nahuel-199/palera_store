import React from 'react';

const Info = () => {

  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-check-shield about__icon'></i>
            <h3 className="about__title">Compromiso</h3>
        </div>

        <div className="about__box">
        <i class='bx bxs-hand about__icon'></i>
            <h3 className="about__title">Respeto</h3>
        </div>

        <div className="about__box">
        <i class='bx bx-lock-alt about__icon'></i>
            <h3 className="about__title">Confianza</h3>
        </div>
    </div>
  )
}

export default Info