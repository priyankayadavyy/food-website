import React, { useContext } from "react";
import "./Fooditem.css";
import Rating from "../../assets/rating_starts.png";
import Add from "../../assets/add_icon_white.png";
import Remove from "../../assets/remove_icon_red.png";
import Green from "../../assets/add_icon_green.png";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCard, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCard(id)}
            src={Add}
            alt="seen"
          />
        ) : (
          <div className="food-item-counter">
            <img src={Remove} onClick={() => removeFromCart(id)} alt="seen" />
            <p>{cartItems[id]}</p>
            <img src={Green} onClick={() => addToCard(id)} alt="seen" />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={Rating} alt="seen" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
