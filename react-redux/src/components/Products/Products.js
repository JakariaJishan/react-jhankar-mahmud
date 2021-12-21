import React from 'react';

const Products = (props) => {
    const {products, addToCart} = props
    return (
        <div style={{border: '1px solid royalblue', margin: '1rem', width: '50%'}}>
            <h1>{products?.title}</h1>
            <button onClick={() => addToCart(products.id, products.title)}>add to cart</button>
        </div>
    );
};

export default Products;