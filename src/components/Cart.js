import React from 'react';

function Cart() {
  // You can add state to manage cart items here
  const cartItems = [];

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              {/* Add buttons or links to update or remove items */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty. Start shopping!</p>
      )}
    </div>
  );
}

export default Cart;
