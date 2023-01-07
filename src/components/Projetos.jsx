import React from 'react';
import { Slide } from 'react-awesome-reveal';
import projectList from '../assets/projectList';
import ProjectCard from './ProjectCard';

export default function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <Slide triggerOnce className="section__tittle" direction="up">
        <h2 className="section__tittle">Projetos</h2>
      </Slide>
      <div />
      <div className="card-container">
        { projectList.map(({
          id, projectName, image, description, links,
        }) => (
          <ProjectCard
            key={id}
            name={projectName}
            thumbnail={image}
            description={description}
            links={links}
          />

        ))}
      </div>
    </section>
  );
}
