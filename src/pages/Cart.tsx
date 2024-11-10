import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  
    return (
      <div>
        <h1>Cart:</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    );
  };
  
  export default Cart;