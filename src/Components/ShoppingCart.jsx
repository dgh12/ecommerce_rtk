import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decreaseItemQuantity, increaseItemQuantity, removeItemsFromCart } from './CartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleRemoveItem = itemId => {
    dispatch(removeItemsFromCart(itemId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleIncreaseQuantity = itemId => {
     dispatch(increaseItemQuantity(itemId));
  };
  const handleDecreaseQuanity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-items">
            <span>{item.name} - ${item.price}</span>
            <div className="quantity-controls">
              <button className="quantity-control-btn" onCLick={() => handleDecreaseQuanity(item.id)}>-</button>
              <span>  {item.quantity}</span>
              <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
    </div>
    <div>{totalAmount ? <div>The total amouont is ${totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;
