import React from 'react';
import '../styles/header.css';
import { AttentionSeeker } from 'react-awesome-reveal';
import hamb from '../assets/list.svg';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <div className="typing">
          Jr Gouveia
        </div>
      </div>
      <div className="navbar-icon navigation-icon">
        <AttentionSeeker effect="rubberBand">
          <button type="button" className="nav-btn">
            <img src={hamb} alt="" />
          </button>
        </AttentionSeeker>
        <div className="dropdown-options">
          <a href="#home">Home</a>
          <a href="https://drive.google.com/file/d/1PE2nbj1drLp9KRuU2DAStfZ2F4xai-gp/view?usp=share_link" target="_blank" rel="noreferrer">Currículo</a>
          <a href="#sobre-mim">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
      <nav className="header-buttons">
        <ul className="menu">
          <li>
            <a href="#home">
              <i className="fa-solid fa-house-user" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1PE2nbj1drLp9KRuU2DAStfZ2F4xai-gp/view?usp=share_link" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-file" />
              <span>Currículo</span>
            </a>
          </li>
          <li>
            <a href="#sobre-mim">
              <i className="fa-solid fa-address-card" />
              <span>Sobre mim</span>
            </a>
          </li>

          <li>
            <a href="#projetos">
              <i className="fa-solid fa-icons" />
              <span>Projetos</span>
            </a>
          </li>
          <li>
            <a href="#contato">
              <i className="fa-solid fa-address-book" />
              <span>Contato</span>
            </a>
          </li>
          <div className="social-contacts">
            <li>
              <a href="https://github.com/jjgouveia" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jarbasgouveia/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
          </div>
        </ul>
      </nav>

    </header>
  );
}
