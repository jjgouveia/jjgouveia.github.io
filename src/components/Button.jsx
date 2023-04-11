import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

export default function Button({ title, iconClass, link }) {
  return (
    <div className="button-component glitch-wrapper">
      <a href={link} className="glitch">
        <i className={iconClass} />
        <span>{ title }</span>
      </a>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  iconClass: PropTypes.string,
  link: PropTypes.string,
}.isRequired;
