import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { text: 'Meat', type: 'meat' },
  { text: 'Bacon', type: 'bacon' },
  { text: 'Cheese', type: 'cheese' },
  { text: 'Salad', type: 'salad' }
];

const BuildControls = () => (
  <div className={styles.BuildControls}>
    {controls.map(control => (
      <BuildControl key={control.text} text={control.text} />
    ))}
  </div>
);

BuildControls.propTypes = {};

export default BuildControls;
