import React from 'react';

const Cart = (props) => {
    let cart = props.cart
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPopulation = totalPopulation + element.population;
    }
    return (
        <div>
            <h2>this is cart: {cart.length} </h2>
           <b><i>total population: {totalPopulation}</i></b> 
        </div>
    );
};

export default Cart;