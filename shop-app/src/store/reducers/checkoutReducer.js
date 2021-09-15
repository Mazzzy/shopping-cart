import { ADD_SHIPMENT_FOR_CHECKOUT, ADD_PAYMENT_FOR_CHECKOUT, CLEAR_CHECKOUT } from '../types';

const initialCheckoutState = {
    shipment: {},
    payment: {}
};

export const checkoutReducer = (state = initialCheckoutState, action) => {
    switch (action.type) {
        case ADD_SHIPMENT_FOR_CHECKOUT:
            return { ...state, shipment: action.payload };
        case ADD_PAYMENT_FOR_CHECKOUT:
            return { ...state, payment: action.payload };
        case CLEAR_CHECKOUT:
            return { ...state, shipment: {}, payment: {} };
        default:
            return state;
    }
}

