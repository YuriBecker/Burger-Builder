import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = ({ show, closeModal }) => (show ? (
  <div className={styles.Backdrop} onClick={closeModal} role="dialog" />
) : null);

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Backdrop;
