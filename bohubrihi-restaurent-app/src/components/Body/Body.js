import React, { Component } from "react";
import { products } from "../../dishes/Dishes";
import Menu from "./Menu";
import ShowDetails from "./ShowDetails";

export default class Body extends Component {
  state = {
    dishes: products,
    displayDishes: null,
  };
  handleDishes = (dish) => {
    this.setState({
      displayDishes: dish,
    });
  };
  render() {
    return (
      <div >
          {this.state.displayDishes !== null ? (
          <ShowDetails displayDishes={this.state.displayDishes} />
        ) : null}
        {this.state.dishes.map((ele) => {
          return (
            <div>
              <Menu dishes={ele} handleDishes={this.handleDishes} />
            </div>
          );
        })}
        
        
      </div>
    );
  }
}
