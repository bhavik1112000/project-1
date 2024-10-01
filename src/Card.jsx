import React from "react";
import "./card.css";

const Card = ({ product }) => {
  const { title, price, id, thumbnail, category, discountPercentage } = product;
  return (
    <div className="card-container" data-testid='product'>
      <div className="card-img-container">
        <img className="card-thumbnail" src={thumbnail} alt="thumbnail" />
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <p className="card-category">{category}</p>
        <span className="card-price">₹{price}</span>
        <span className="card-discountPercentage">
          {discountPercentage}% off
        </span>
      </div>
    </div>
  );
};

export default Card;
