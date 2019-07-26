import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      cheese: 2,
      bacon: 1,
      salad: 1
    }
  };

  render() {
    const { ingredients } = this.state;
    return (
      <>
        <Burger ingredients={ingredients} />
        <div>CONTROLS</div>
      </>
    );
  }
}

export default BurguerBuilder;
