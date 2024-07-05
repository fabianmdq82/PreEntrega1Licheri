import React from "react";
import { CartContext } from "../context/CartContext";
import "../Styles/style.css";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>CARRITO DE COMPRAS</h1>
      {cart.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>PRECIO: ${item.price}</p>
                <p>CANTIDAD: {item.quantity}</p>
                <div className="cart-buttons">
                  <button onClick={() => handleRemoveOne(item)} className="cart-button">-</button>
                  <button onClick={() => handleDeleteItem(item)} className="cart-button delete">ELIMINAR</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${calculateTotal()}</h2>
          </div>
        </div>
      ) : (
        <p>TU CARRITO ESTÁ VACÍO</p>
      )}
    </div>
  );
};

export default Cart;
