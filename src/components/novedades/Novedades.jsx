import React, { useState } from "react";
import Menu from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./novedades.css";

const Novedades = () => {
  const [items] = useState(Menu);

  return (
    <section className="work container section" id="proyectos">
      <h2 className="section__title">Nuestros Productos</h2>
      <span className="section__subtitle"></span>

      <Swiper
        className="work__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
        modules={[Pagination]}
      >
        {items.map((elem) => {
          const { id, title, images } = elem;
          return (
            <SwiperSlide className="work__card" key={id}>
                <img src={images} alt="" className="work__img" />
              <span className="text_novedades">{title}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Novedades;
