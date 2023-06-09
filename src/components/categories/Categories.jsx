import React from 'react'
import { categories } from './data';
import CategoryItem from '../categoryItem/CategoryItem';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./categories.css";

const Categories = () => {
  return (
    <section className="work container section" id="proyectos">
      <h2 className="section__title">Nuestras Categorias</h2>
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
        {categories.map((item) => (
             <SwiperSlide 
             className="work__card" 
             key={item.id}
             >
        <CategoryItem item={item} key={item.id} />
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
  )
}

export default Categories