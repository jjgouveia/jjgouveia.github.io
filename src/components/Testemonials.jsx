/* eslint-disable import/no-unresolved */
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import data from '../assets/testemonials';
import '../styles/testemonials.css';

export default function Testemonials() {
  return (
    <section className="testemonials" id="testemonials">

      <h2 className="section__tittle testemonial-title">Recomendações</h2>
      <span className="section__subtittle">O que meus clientes e colegas de trabalho dizem:</span>
      <div
        className=""
        style={{
          paddingBottom: '50px',
          alignItems: 'center',
        }}
      >
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data.map(({
            id, profilePic, name, job, testemonial,
          }) => (
            <SwiperSlide className="swiper-slide-testemonial">
              <div
                className="testemonial-card"
                key={id + name}
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  width: '300px',
                  height: '300px',
                }}
              >
                <div className="testemonial-label">
                  <img className="testemonial-profile-pic" src={profilePic} alt={name} />
                  <div className="testemonial-info">
                    <h3>{name}</h3>
                    <h4>{job}</h4>
                  </div>
                </div>
                <div className="testemonial">
                  <p className="ttt">{testemonial}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
