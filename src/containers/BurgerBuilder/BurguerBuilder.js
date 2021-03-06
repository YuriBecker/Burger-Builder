import React, { useState, useEffect } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
  meat: 1.25,
  cheese: 0.75,
  bacon: 1,
  salad: 0.5
};

function BurguerBuilder() {
  const [ingredients, setIngredients] = useState({
    meat: 0,
    cheese: 0,
    bacon: 0,
    salad: 0
  });

  const [price, setPrice] = useState(2);

  const [disabledButtons, setDisabledButtons] = useState({
    meat: false,
    cheese: false,
    bacon: false,
    salad: false
  });

  const [canPurchase, setCanPurchase] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const addIngredientHandler = (type) => {
    const updatedNumber = ingredients[type] + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedNumber;
    setIngredients(updatedIngredients);

    const priceAdd = INGREDIENTS_PRICES[type];
    const oldPrice = price;
    setPrice(oldPrice + priceAdd);
  };

  useEffect(() => {
    const disabled = { ...ingredients };
    const ingArray = Object.entries(ingredients);
    for (const [ing, count] of ingArray) {
      disabled[ing] = count <= 0;
    }
    setDisabledButtons(disabled);

    const listIngredients = {
      ...ingredients
    };
    const sum = Object.keys(listIngredients)
      .map(key => listIngredients[key])
      .reduce((s, el) => s + el, 0);
    setCanPurchase(sum > 0);
  }, [ingredients]);

  const removeIngredientHandler = (type) => {
    const oldNumberOfIngredients = ingredients[type];
    if (oldNumberOfIngredients > 0) {
      const updatedNumber = oldNumberOfIngredients - 1;
      const updatedIngredients = { ...ingredients };
      updatedIngredients[type] = updatedNumber;
      setIngredients(updatedIngredients);

      const priceRemove = INGREDIENTS_PRICES[type];
      const oldPrice = price;
      setPrice(oldPrice - priceRemove);
    }
  };

  const purchaseHandler = () => setPurchasing(true);

  const purchaseCancelHandler = () => setPurchasing(false);

  const purchaseContinueHandler = () => {
    alert('Continue!');
  };

  return (
    <>
      <Modal show={purchasing} closeModal={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
          price={price}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BurgerControls
        price={price}
        addFunction={addIngredientHandler}
        removeFunction={removeIngredientHandler}
        disabled={disabledButtons}
        canPurchase={canPurchase}
        ordered={purchaseHandler}
      />
    </>
  );
}

export default BurguerBuilder;
