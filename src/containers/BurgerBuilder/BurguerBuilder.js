import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

function BurguerBuilder() {
  const [ingredients, setIngredients] = useState({
    meat: 0,
    cheese: 0,
    bacon: 0,
    salad: 0
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <BurgerControls />
    </>
  );
}

export default BurguerBuilder;
