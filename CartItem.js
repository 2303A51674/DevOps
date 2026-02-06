import React from "react";

function CartItem({ name, price, quantity, increment, decrement, reset }) {
  return (
    <div className="cart-item">
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CartItem;
