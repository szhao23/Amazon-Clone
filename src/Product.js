import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // gives access to the store/data layer
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            // creates an array with rating 5 because rating was 5
            Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))
          }
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
