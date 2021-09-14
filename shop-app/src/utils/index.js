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

// helpers
// format currency value and display along with symbol
export const formatCurrency = (num) => (`${CONSTANTS.CURRENCY} ${Number(num.toFixed(1)).toLocaleString()}`);

// handle null/undefined properties for custom components
export const escapeNullUndefinedAttrVal = (attrVal) => (attrVal || '');