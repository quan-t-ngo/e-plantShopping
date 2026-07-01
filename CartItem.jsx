import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "./CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.items.map(item => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <img src="https://via.placeholder.com/80" alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h2>Total Amount: ${cart.totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartItem;
