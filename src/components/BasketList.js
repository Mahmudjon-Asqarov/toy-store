import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order, handleBasketShow } = props;
  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
  return (
    <>
      <div className="bc_fon" onClick={handleBasketShow}></div>
      <ul className="collection basket-list">
        <li className="collection-item active red darken-2">Basket</li>
        {order.length ? (
          order?.map((item) => (
            <BasketItem
              removeFromBasket={props.removeFromBasket}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              key={item.id}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active active-price red darken-2">
          <span>
            Total Price: {totalPrice} <b>$</b>
          </span>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </>
  );
}

export default BasketList;
