import React from 'react';
import { Fade, JackInTheBox } from 'react-awesome-reveal';
import foto from '../img/me_resized.png';
import Button from './Button';

export default function Profile() {
  return (
    <section className="home" id="home">
      <div className="profile">
        <JackInTheBox className="profile" childClassName="profile__foto">
          <img className="profile__foto" src={foto} alt="Foto do Jr Gouveia" />
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
      <Button
        title="Baixar CV"
        iconClass="fa-solid fa-file"
        link="https://drive.google.com/file/d/1VBf_kohmm0l_L_IWgl064OCh5sQn1IjK/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      />
    </section>
  );
}
