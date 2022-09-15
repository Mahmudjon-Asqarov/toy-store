import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function BasketItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      {name}
      <div>
        {price * quantity} <b>$</b>
      </div>
      <div className="count">
        <AiOutlineMinus onClick={() => props.decrementQuantity(id)} />
        <b>{quantity}</b>
        <AiOutlinePlus onClick={() => props.incrementQuantity(id)} />
      </div>
      <div>
        <span
          className="secondary-content"
          onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete red-colors">delete</i>
        </span>
      </div>
    </li>
  );
}

export default BasketItem;
