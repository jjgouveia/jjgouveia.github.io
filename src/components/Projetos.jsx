/* eslint-disable import/no-unresolved */
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import projectList from '../assets/projectList';
import ProjectCard from './ProjectCard';
import '../styles/projetos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules

export default function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <Slide triggerOnce className="section__tittle" direction="up">
        <h2 className="section__tittle">Projetos</h2>
      </Slide>
      <div />
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
        className="mySwiper fixed-height"
      >
        <div className="card-container">
          { projectList.map(({
            id, projectName, image, description, links,
          }) => (
            <SwiperSlide className="swiper-slide-testemonial">
              <ProjectCard
                key={id}
                name={projectName}
                thumbnail={image}
                description={description}
                links={links}
              />
            </SwiperSlide>

          ))}
        </div>
      </Swiper>
    </section>
  );
}
