import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function SobreMim() {
  return (
    <>
      <Slide triggerOnce className="section__tittle" direction="up">
        <h2 className="section__tittle">Sobre Mim</h2>
      </Slide>
      <div className="description">
        <h3 className="description__tittle">Quem sou?</h3>
        <Slide className="description" childClassName="description__text" direction="left">
          <p className="description__text">
            Sempre curioso, me apaixonei ainda criança por tecnologia. Quando
            adolescente criei meu primeiro sistema Android personalizado e
            desde lá a programação faz parte da minha vida. Hoje sou um
            desenvolvedor/estudante web full stack com profundo interesse no
            universo Back-End. Em poucas palavras, crio sites e sistemas que
            ajudam pessoas e organizações a enfrentar seus desafios de
            negócios e atender às suas necessidades.
          </p>
        </Slide>
      </div>
    </>
  );
}
