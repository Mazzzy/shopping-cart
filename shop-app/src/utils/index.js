import { CONSTANTS } from '../lib/config';

// configurable define custom element call
export const defineCustomElement = (tagName, element) => {
    if (!customElements.get(tagName)) {
      customElements.define(tagName, element);
    }
}
// logging redux operation in console
export const storeLogger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

// helpers ::

// get totalCount from cartItems 
export const getCartItemsTotal = (cartItems) => (cartItems.reduce((a, c) => a + c.sellingPrice * c.count, 0));

// format currency value and display along with symbol
export const formatCurrency = (num) => (`${CONSTANTS.CURRENCY} ${Number(num.toFixed(1)).toLocaleString()}`);

// handle null/undefined properties for custom components
export const escapeNullUndefinedAttrVal = (attrVal) => (attrVal || '');

// to check if object is empty
export const isEmptyObject = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}