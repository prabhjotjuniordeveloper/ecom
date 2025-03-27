import React from "react";
import './product.css';

const Product = () => {
  return (
    <div className="product-card">
      <img
        src="https://via.placeholder.com/300x400/FFA500/FFFFFF?text=Denim+Jacket"
        alt="Denim Jacket"
        className="main-image"
      />
      <div className="card-body">
        <h2>Denim Jacket</h2>
        <p className="price">$19.99</p>
        <button className="add-to-cart">ADD TO CART</button>
      </div>
      <div className="card-footer">
        <img
          src="https://via.placeholder.com/50/FFF5E5/333?text=A"
          alt="Variant 1"
        />
        <img
          src="https://via.placeholder.com/50/E5E5FF/333?text=B"
          alt="Variant 2"
        />
        <img
          src="https://via.placeholder.com/50/FFE5E5/333?text=C"
          alt="Variant 3"
        />
      </div>
    </div>
  );
};

export default Product;


