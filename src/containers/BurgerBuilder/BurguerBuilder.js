import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';

function BurguerBuilder(props) {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    cheese: 2,
    bacon: 1,
    salad: 1
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>CONTROLS</div>
    </>
  );
}

export default BurguerBuilder;
