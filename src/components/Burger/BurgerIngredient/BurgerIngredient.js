import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles.BreadBottom} />;
      break;

    case 'bread-top':
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
      break;

    case 'meat':
      ingredient = <div className={styles.Meat} />;
      break;

    case 'cheese':
      ingredient = <div className={styles.Cheese} />;
      break;

    case 'salad':
      ingredient = <div className={styles.Salad} />;
      break;

    case 'bacon':
      ingredient = <div className={styles.Bacon} />;
      break;

    default:
      ingredient = null;
      break;
  }

  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.oneOf([
    'bread-bottom',
    'bread-top',
    'meat',
    'cheese',
    'salad',
    'bacon'
  ]).isRequired
};

export default burgerIngredient;
