import React from 'react';
import '../styles/header.css';

export default function Header() {
  return (
    <header>
      <div style={{
        display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div className="logo">
          <div className="typing">
            <span>Jr Gouveia</span>
          </div>
        </div>
        <div className="social-contacts onHeader">
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

      <nav className="footer-bar">
        <ul className="foot-links">
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
        </ul>
      </nav>
    </header>
  );
}
