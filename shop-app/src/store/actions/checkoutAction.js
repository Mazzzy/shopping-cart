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
