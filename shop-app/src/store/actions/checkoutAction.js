import { createSelector } from 'reselect';
import { ADD_SHIPMENT_FOR_CHECKOUT, ADD_PAYMENT_FOR_CHECKOUT, CLEAR_CHECKOUT } from '../types';

// dispatched to add shipment details
export const addShipmentInCheckout = (shipmentData) => {
  return {
    type: ADD_SHIPMENT_FOR_CHECKOUT,
    payload: shipmentData,
  }
};

// dispatched to payment details
export const addPaymentInCheckout = (paymentData) => {
  return {
    type: ADD_PAYMENT_FOR_CHECKOUT,
    payload: paymentData,
  }
};

// dispatched to remove all items from checkout (store)
export const clearCheckout = () => {
  return {
    type: CLEAR_CHECKOUT
  }
};

// selectors to get checkout (shipment or payment) details from store
const getCheckoutSelector = state => state.checkout;

// get available shipment info from the store
export const getAvailableCheckoutShipmentSelector = createSelector(
  getCheckoutSelector,
  ({ shipment }) => (shipment)
);

// get available payment info from the store
export const getAvailableCheckoutPaymentSelector = createSelector(
  getCheckoutSelector,
  ({ payment }) => (payment)
);