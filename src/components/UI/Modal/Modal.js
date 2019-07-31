import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  const { children, show, closeModal } = props;
  return (
    <>
      <Backdrop show={show} closeModal={closeModal} />
      <div
        className={styles.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default Modal;
