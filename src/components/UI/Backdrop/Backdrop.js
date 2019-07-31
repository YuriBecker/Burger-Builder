import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
  const { show, closeModal } = props;
  return show ? <div className={styles.Backdrop} onClick={closeModal} /> : null;
};

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Backdrop;
