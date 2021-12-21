import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Actions/Actions";
import Products from "../Products/Products";

const Shop = (props) => {
  const {products, addToCart} = props;
  return (
    <div>
      {products.map((pd) => (
        <Products products={pd} key={pd.id} addToCart={addToCart}></Products>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = {
  addToCart: addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
