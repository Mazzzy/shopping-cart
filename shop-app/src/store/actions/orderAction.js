import { createSelector } from 'reselect';
import { CREATE_ORDER, CLEAR_ORDER } from '../types';

// dispatched to create order
export const createOrder = (data) => {
  return {
    type: CREATE_ORDER,
    payload: data,
  }
};

// dispatched to remove all items from order (store)
export const clearOrder = () => {
  return {
    type: CLEAR_ORDER
  }
};

// selectors to get placed order details from store
const getOrderSelector = state => state.order;

// get available order details from the store
export const getAvailablePlacedOrderSelector = createSelector(
  getOrderSelector,
  ({ order }) => (order)
);