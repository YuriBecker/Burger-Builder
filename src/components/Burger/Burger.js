import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = (props) => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients)
    .map(ingredientName => [...Array(ingredients[ingredientName])].map((ing, index) => (
      <BurgerIngredient key={ingredientName + index} type={ingredientName} />
    )))
    .reduce((prevValue, currentValue) => prevValue.concat(currentValue), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <h2>Please, add ingredients!</h2>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default burger;
