import React from 'react';
import PropTypes from 'prop-types';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { text: 'Meat', type: 'meat' },
  { text: 'Bacon', type: 'bacon' },
  { text: 'Cheese', type: 'cheese' },
  { text: 'Salad', type: 'salad' }
];

const BuildControls = (props) => {
  const { price, canPurchase, ordered } = props;
  return (
    <div className={styles.BuildControls}>
      <p>
        Price:
        <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(control => (
        <BuildControl
          key={control.text}
          text={control.text}
          more={() => props.addFunction(control.type)}
          less={() => props.removeFunction(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}
      <button
        type="button"
        className={styles.OrderButton}
        disabled={!canPurchase}
        onClick={ordered}
      >
        Order Now
      </button>
    </div>
  );
};

BuildControls.propTypes = {
  addFunction: PropTypes.func.isRequired,
  removeFunction: PropTypes.func.isRequired,
  disabled: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  canPurchase: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired
};

export default BuildControls;
