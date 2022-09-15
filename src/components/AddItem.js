import React, { useState } from "react";

export default function AddItem(props) {
  const productItem = {
    productName: "",
    productPrice: 0,
  };
  const [product, setProduct] = useState(productItem);
  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        props.addItem(product.productName, Number(product.productPrice));
      }}
    >
      <div className="mb-3 col-4">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="name"
          name="productName"
          onChange={(e) => {
            setProduct({ ...product, productName: e.target.value });
          }}
          value={product.productName}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="productPrice"
          onChange={(e) => {
            setProduct({ ...product, productPrice: Number(e.target.value) });
          }}
          value={product.productPrice}
        />
      </div>
      <button type="submit" className="btn btn-primary col-4">
        Add
      </button>
    </form>
  );
}
