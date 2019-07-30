import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

const BuildControl = (props) => {
  const {
    text, more, less, disabled
  } = props;
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Text}>{text}</div>
      <button
        type="button"
        className={styles.Less}
        onClick={less}
        disabled={disabled}
      >
        -
      </button>
      <button type="button" className={styles.More} onClick={more}>
        +
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  text: PropTypes.string.isRequired,
  more: PropTypes.func.isRequired,
  less: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default BuildControl;
