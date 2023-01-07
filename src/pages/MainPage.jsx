import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';
import '../styles/logo.css';
import '../styles/home.css';
import '../styles/section-tittle.css';
import '../styles/sobre-mim.css';
import '../styles/projetos.css';
import '../styles/contato.css';
import '../styles/tablet.css';
import '../styles/mobile.css';
import '../styles/animations.css';
import { JackInTheBox, Fade, Slide } from 'react-awesome-reveal';
import foto from '../img/me_resized.png';
import Header from '../components/Header';
import SobreMim from '../components/SobreMim';
import Skills from '../components/Skills';
import Projetos from '../components/Projetos';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <section className="home" id="home">
          <div className="profile">
            <JackInTheBox className="profile" childClassName="profile__foto">
              <img className="profile__foto" src={foto} alt="foto" />
            </JackInTheBox>
            <div className="profile-intern-container">
              <Fade className="profile__name">
                <h1 className="profile__name">Jr Gouveia</h1>
              </Fade>
              <span className="profile__text">
                Desenvolvedor Web Full Stack
              </span>
            </div>
          </div>
        </section>
        <section className="sobre-mim" id="sobre-mim">
          <SobreMim />
          <Skills />
        </section>
        <Projetos />
        <section className="contatos" id="contato">
          <Slide triggerOnce className="section__tittle" direction="up">
            <h2 className="section__tittle">Contato</h2>
          </Slide>
          <ul className="contato-container">
            <li>
              <h3>Contato</h3>
            </li>
            <li>
              <div className="contato-item">
                <i className="fas fa-phone contato-item__icon" />
                <span className="contato-iten__text">(81) 9 9173-4478</span>
              </div>
            </li>
            <li>
              <div className="contato-item contato-item__icon">
                <i className="fas fa-envelope" />
                <span className="contato-iten__text">gouvik.dev@gmail.com</span>
              </div>
            </li>
            <li>
              <div className="contato-item contato-item__icon">
                <i className="fab fa-whatsapp" />
                <span className="contato-iten__text">(81) 9 9173-4478</span>
              </div>
            </li>
          </ul>
          <ul className="social-container">
            <li className="social">
              <a
                href="https://www.linkedin.com/in/jarbasgouveia/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li className="social">
              <a
                href="https://github.com/jjgouveia"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="social">
              <a
                href="https://www.instagram.com/junior_gouveia"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
          <ul className="link-container">
            <li>
              <h3>Links</h3>
            </li>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#sobre-mim">Sobre mim</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <span>
          Direitos reservados - 2022 | Desenvolvido em React por Jr Gouveia
        </span>
      </footer>
    </>
  );
}
