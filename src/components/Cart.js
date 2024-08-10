import React from 'react';
import './Cart.css';

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart__item">
              <img src={item.image} alt={item.title} className="cart__itemImage" />
              <div className="cart__itemDetails">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div className="cart__itemQuantity">
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => onRemoveFromCart(item.id)} className="cart__removeButton">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart__total">
            <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
            <button className="cart__checkoutButton">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
