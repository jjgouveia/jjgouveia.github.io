import React from 'react';

const data = [
  {
    id: 1,
    profilePic: 'https://i.imgur.com/0y0wYQq.jpg',
    name: 'John Doe',
    job: 'Web Developer',
    testemonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    id: 2,
    profilePic: 'https://media.licdn.com/dms/image/D4D35AQHde0rRCpJhHg/profile-framedphoto-shrink_200_200/0/1680932557523?e=1682049600&v=beta&t=1LHfPwZxFLFFmZi1mHBHUZDDiLw0FFu8VWcBsuIqLbc',
    name: 'Anderson Gouveia',
    job: 'Vendedor',
    testemonial: 'Participar de um Hackathon com o Jarbas foi uma experiência incrível, pude ver o quão bem ele se destaca nas suas habilidades com código, com sua boa comunicação e sempre querendo dar o melhor no projeto inteiro. Ele sempre dá seu melhor e está lá pra quando você precisar, obrigado demais por essa experiência meu amigo!',
  },
  {
    id: 3,
    profilePic: 'https://media.licdn.com/dms/image/D4D35AQHde0rRCpJhHg/profile-framedphoto-shrink_200_200/0/1680932557523?e=1682049600&v=beta&t=1LHfPwZxFLFFmZi1mHBHUZDDiLw0FFu8VWcBsuIqLbc',
    name: 'Anderson Gouveia',
    job: 'Vendedor',
    testemonial: 'Participar de um Hackathon com o Jarbas foi uma experiência incrível, pude ver o quão bem ele se destaca nas suas habilidades com código, com sua boa comunicação e sempre querendo dar o melhor no projeto inteiro. Ele sempre dá seu melhor e está lá pra quando você precisar, obrigado demais por essa experiência meu amigo!',
  },
  {
    id: 4,
    profilePic: 'https://media.licdn.com/dms/image/D4D35AQHde0rRCpJhHg/profile-framedphoto-shrink_200_200/0/1680932557523?e=1682049600&v=beta&t=1LHfPwZxFLFFmZi1mHBHUZDDiLw0FFu8VWcBsuIqLbc',
    name: 'Anderson Gouveia',
    job: 'Vendedor',
    testemonial: 'Participar de um Hackathon com o Jarbas foi uma experiência incrível, pude ver o quão bem ele se destaca nas suas habilidades com código, com sua boa comunicação e sempre querendo dar o melhor no projeto inteiro. Ele sempre dá seu melhor e está lá pra quando você precisar, obrigado demais por essa experiência meu amigo!',
  },
];

export default function Testemonials() {
  return (
    <section className="testemonials" id="testemonials">
      <h2 className="section__tittle">Recomendações</h2>
      <span className="section__subtittle">O que meus clientes e colegas de trabalho dizem:</span>
      <div className="testemonials-container">
        {data.map(({
          id, profilePic, name, job, testemonial,
        }) => (
          <div className="testemonial-card" key={id}>
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
        ))}
      </div>
    </section>
  );
}
