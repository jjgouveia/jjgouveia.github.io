import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function Skills() {
  return (
    <div className="skills">
      <h3 className="skills__tittle">Skills</h3>
      <ul className="skills__container">
        <Slide triggerOnce direction="right">
          <li className="skills__icon">
            <i className="fab fa-html5" />
            <span>HTML</span>
          </li>
          <li className="skills__icon">
            <i className="fab fa-css3-alt" />
            <span>CSS/SCSS</span>
          </li>
          <li className="skills__icon">
            <i className="fab fa-js" />
            <span>JS/TS</span>
          </li>
          <li className="skills__icon">
            <i className="fa-brands fa-node" />
            <span>NodeJS</span>
          </li>
          <li className="skills__icon">
            <i className="fa-brands fa-java" />
            <span>Java</span>
          </li>
          <li className="skills__icon">
            <i className="fa-solid fa-server" />
            <span>Express</span>
          </li>
          <li className="skills__icon">
            <i className="fa-sharp fa-solid fa-database" />
            <span>mySQL</span>
          </li>
          <li className="skills__icon">
            <i className="fa-brands fa-react" />
            <span>React</span>
          </li>
          <li className="skills__icon">
            <i className="fa-brands fa-angular" />
            <span>Angular 10+</span>
          </li>
          <li className="skills__icon">
            <i className="fa-solid fa-server" />
            <span>Adonis JS</span>
          </li>
          <li className="skills__icon">
            <i className="fa-sharp fa-solid fa-database" />
            <span>mongoDB</span>
          </li>
          <li className="skills__icon">
            <i className="fa-brands fa-git" />
            <span>Git</span>
          </li>
        </Slide>
      </ul>
    </div>
  );
}
