import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import knifePath from "../images/knife.png"
import whiteLinesPath from "../images/lines-white.png"
import square1Path from "../images/serv-square1.svg"
import square2Path from "../images/serv-square2.svg"
import square3Path from "../images/serv-square3.svg"

function Services({devWidth}) {

  return (
    <section className="services">
      <h2 className="services__title">Наши услуги</h2>
      <Swiper
        className="services__slider"
        slidesPerView={devWidth <=1024 ? 1 : 3}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={devWidth <=1024 ? false : true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="services__slide">
          <div className="card">
            <img className="card__img" src={knifePath}></img>
            <p className="card__text">Бла-бла-бла здесь очень важное описание</p>
            <p className="card__price">3000 руб.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="services__slide"> 
          <div className="card">
            <img className="card__img" src={knifePath}></img>
            <p className="card__text">Бла-бла-бла здесь очень важное описание</p>
            <p className="card__price">3000 руб.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="services__slide">
          <div className="card">
            <img className="card__img" src={knifePath}></img>
            <p className="card__text">Бла-бла-бла здесь очень важное описание</p>
            <p className="card__price">3000 руб.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="services__slide">
          <div className="card">
            <img className="card__img" src={knifePath}></img>
            <p className="card__text">Бла-бла-бла здесь очень важное описание</p>
            <p className="card__price">3000 руб.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <img className="services__background-lines" src={whiteLinesPath}></img>
      <img src={square1Path} className="services__square-1 rotation-animation"></img>
      <img src={square2Path} className="services__square-2 rotation-animation"></img>
      <img src={square3Path} className="services__square-3 rotation-animation"></img>
    </section>
  );
}

export default Services;