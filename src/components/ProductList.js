import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return props.productList.length > 0 ? props.productList.map((product, index) => {
    return (
      <Product
        product={product}
        key={index}
        incrementQuantity={props.incrementQuantity}
        decrementQuantity={props.decrementQuantity}
        index={index}
        removeItem={props.removeItem}
      />
    );
  }) 
  : <h1>No product found</h1>
};

export default ProductList;
