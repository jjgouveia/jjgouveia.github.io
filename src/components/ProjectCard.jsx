import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({
  name, thumbnail, description, links,
}) {
  return (
    <div className="card">
      <img src={thumbnail} alt={name} />
      <h2>{ name }</h2>
      <h3>{ description }</h3>
      <div className="links-container">
        <a href={links.repository} target="_blank" rel="noreferrer">
          <span>
            {' '}
            Repositório
            {' '}
            <i className="fa-brands fa-github-alt" />
            {' '}
          </span>
        </a>
        { links.deploy && (
        <a href={links.deploy} target="_blank" rel="noreferrer">
          Deploy
          {' '}
          <i className="fa-solid fa-earth-americas" />
          {' '}
        </a>
        ) }
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default ProjectCard;
