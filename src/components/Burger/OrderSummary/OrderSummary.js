import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  purchaseContinued,
  purchaseCanceled,
  price
}) => {
  const ingSummary = Object.keys(ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
:
      {ingredients[igKey]}
    </li>
  ));

  return (
    <>
      <h3>Your Order</h3>
      <p>Your burger's ingredients list:</p>
      <ul>{ingSummary}</ul>
      <p>
        <strong>{`Total Price: ${price.toFixed(2)}`}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
};

export default OrderSummary;
