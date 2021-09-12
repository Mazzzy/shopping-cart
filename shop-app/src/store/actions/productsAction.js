import { createSelector } from 'reselect';
import { SET_PRODUCTS } from "../types";

// dispatches to set fetched products (via API call) inside store
export const setProducts = (productsList) => {
  return {
      type: SET_PRODUCTS,
      payload: productsList,
  };
};

// selectors to get products from store
const getProductsSelector = state => state.products;

// get available categories list from the store
export const getAvailableProductsSelector = createSelector(
  getProductsSelector,
  ({ products }) => (products)
);