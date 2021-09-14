import { createSelector } from 'reselect';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

// dispatched to set product item inside cart (store)
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

// dispatched to remove product item from cart (store)
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  }
};

// dispatched to remove all products from cart (store)
export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
};

// selectors to get cart data (products) from store
const getCartSelector = state => state.cart;

// get available cart items (product) list from the store
// Object.values(cart)) : to convert cart object into array for better rendering in UI
export const getAvailableCartSelector = createSelector(
  getCartSelector,
  ({ cart }) => (Object.values(cart))
);
