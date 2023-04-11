import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from './Button';
import variables from '../assets/variables';
import meLogo from '../img/me_logo.png';

export default function Profile() {
  return (
    <section className="home" id="home">
      <div className="profile">
        <div className="profile-intern-container">
          <Fade className="profile__name">
            <h1 className="profile__name">Jr Gouveia</h1>
          </Fade>
          <span className="profile__text">
            Full Stack Web Developer
          </span>
          <img src={meLogo} alt="Foto do Jr Gouveia" className="meLogo" />
        </div>
      </div>
      <Button
        title="Baixar CV"
        iconClass="fa-solid fa-file"
        link={variables.cv}
        target="_blank"
        rel="noreferrer"
      />
    </section>
  );
}
