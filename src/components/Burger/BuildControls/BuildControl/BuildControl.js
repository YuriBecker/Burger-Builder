import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControl.module.css';

const BuildControl = (props) => {
  const { text } = props;

  return (
    <div className={styles.BuildControl}>
      <div className={styles.Text}>{text}</div>
      <button type="button" className={styles.Less}>
        -
      </button>
      <button type="button" className={styles.More}>
        +
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  text: PropTypes.string.isRequired
};

export default BuildControl;
