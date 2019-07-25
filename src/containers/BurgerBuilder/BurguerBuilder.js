import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <Burger ingredients={ingredients} />
        <div>CONTROLS</div>
      </Fragment>
    );
  }
}

export default BurguerBuilder;
