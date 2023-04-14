import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Contatos() {
  return (
    <section className="contatos" id="contato">
      <Fade triggerOnce className="section__tittle" direction="up">
        <h2 className="section__tittle">Contato</h2>
      </Fade>
      <ul className="contato-container">
        <li>
          <h3>Contato</h3>
        </li>
        <Fade>
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
        </Fade>
      </ul>
      <ul className="social-container">
        <Fade>
          <li className="social">
            <a
              href="https://www.linkedin.com/in/jarbasgouveia/"
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li className="social">
            <a
              href="https://github.com/jjgouveia"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li className="social">
            <a
              href="https://www.instagram.com/junior_gouveia"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </Fade>
      </ul>
      <ul className="link-container">
        <li>
          <h3>Links</h3>
        </li>
        <Fade>
          <li>
            <a href="#home" title="Início">Início</a>
          </li>
          <li>
            <a href="#sobre-mim" title="Sobre Mim">Sobre mim</a>
          </li>
          <li>
            <a href="#projetos" title="Projetos">Projetos</a>
          </li>
          <li>
            <a href="#contato" title="Contatos">Contato</a>
          </li>
        </Fade>
      </ul>
    </section>
  );
}
