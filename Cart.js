import React, { useState } from "react";
import CartItem from "./CartItem";
import "./App.css";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Book", price: 100, quantity: 1 },
    { id: 2, name: "Pen", price: 20, quantity: 1 },
    { id: 3, name: "Notebook", price: 60, quantity: 1 },
    { id: 4, name: "Bag", price: 500, quantity: 1 },
  ]);

  const increment = (id) => {
    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setItems(
      items.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const reset = (id) => {
    setItems(
      items.map(item =>
        item.id === id
          ? { ...item, quantity: 1 }
          : item
      )
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 className="cart-title">Shopping Cart</h1>


      <div className="cart-container">
        {items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            increment={() => increment(item.id)}
            decrement={() => decrement(item.id)}
            reset={() => reset(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
