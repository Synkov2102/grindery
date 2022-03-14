import Header from "./components/Header";
import FirstOffer from "./components/FirstOffer";
import Location from "./components/Location";

import knifePath from "./images/knife.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";



function App() {
  return (
    <>
    <Header />
    <FirstOffer />
    <Location />
    <section className="services">
      <h2 className="services__title">Наши услуги</h2>
      <Swiper
        className="services__slider"
        slidesPerView={3}
        spaceBetween={60}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
    </section>
    </>
  );
}

export default App;
