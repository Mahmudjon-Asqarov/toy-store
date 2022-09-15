import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import BasketList from "./BasketList";
// import { ToastContainer, toast } from "react-toastify";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";
import toast from "react-hot-toast";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Goods added to basket successfully!");
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  // const removeFromBasket = (itemId) => {
  //   const newOrder = order.filter((item) => item.id !== itemId);
  //   setOrder(newOrder);
  // };
  const removeFromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
    toast.error("Goods delete basket successfully!");
  };

  const incrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });

    setOrder(newOrder);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
      .catch((err) => console.log("API", err));
  }, []);

  return (
    <div className="content container shop-container">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Loader />
      ) : (
        <GoodList addToBasket={addToBasket} goods={goods} />
      )}
      {isBasketShow ? (
        <BasketList
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          handleBasketShow={handleBasketShow}
          order={order}
          removeFromBasket={removeFromBasket}
        />
      ) : null}
    </div>
  );
}
export default Shop;
