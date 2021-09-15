import { CREATE_ORDER, CLEAR_ORDER } from '../types';

const initialOrderState = {
    order: {}
};

export const orderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return { ...state, order: action.payload };
        case CLEAR_ORDER:
            return { ...state, order: {} };
        default:
            return state;
    }
}

