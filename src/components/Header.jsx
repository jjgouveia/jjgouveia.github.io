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
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1PE2nbj1drLp9KRuU2DAStfZ2F4xai-gp/view?usp=share_link" target="_blank" rel="noreferrer">Currículo</a>
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
      </nav>

    </header>
  );
}
