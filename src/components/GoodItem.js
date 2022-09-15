import React from "react";

function GoodItem(props) {
  const { id, name, description, price, full_background, addToBasket } = props;
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() => addToBasket({ id, name, price })}
          className="btn red darken-3
          "
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}

export default GoodItem;
