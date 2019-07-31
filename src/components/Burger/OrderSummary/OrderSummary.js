import React from 'react';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
  const { ingredients } = props;
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
      <p>Continue to Checkout?</p>
    </>
  );
};

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default OrderSummary;
