import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ clicked, children, btnType }) => (
  <button
    className={[styles.Button, styles[btnType]].join(' ')}
    type="button"
    onClick={clicked}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired
};

export default Button;
