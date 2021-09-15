import { CREATE_ORDER, CLEAR_ORDER } from '../types';

// dispatched to create order
export const createOrder = (data) => {
  return {
    type: CREATE_ORDER,
    payload: {
      order: data,
    },
  }
};

// dispatched to remove all items from order (store)
export const clearOrder = () => {
  return {
    type: CLEAR_ORDER
  }
};
