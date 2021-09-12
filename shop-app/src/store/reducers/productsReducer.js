import { SET_PRODUCTS } from '../types';

const initialProductsState = {
  products: []
};

export const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
          return { ...state, products: action.payload };
        default:
          return state;
      }
};
