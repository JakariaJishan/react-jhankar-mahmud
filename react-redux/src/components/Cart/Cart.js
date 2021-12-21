import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/Actions';

const Cart = (props) => {
    const {cart, removeFromCart} = props
    return (
        <div>
            this is cart
            <ul>
                {
                    cart.map(ele => <li key={ele.cartId}>
                        {ele.name}
                        <button onClick={() => removeFromCart(ele.cartId)}>
                            x
                        </button> 
                    </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);