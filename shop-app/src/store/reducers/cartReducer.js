import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

/* note: here used cart as object specifically instead of array
 * reason: for better traversal during add and delete
 * eg structure:
 * cart = {
 *  101: { productId: 101, name: "XYZ", sellingPrice: 100 }
 * }
}*/
const initialCartState = {
    cart: {}
};

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const cartItems = getItemsForAddToCart(state, action.payload);
            return { ...state, cart: cartItems };
        case REMOVE_FROM_CART:
            const updatedCartItems = getItemsForRemoveFromCart(state, action.payload);
            return { ...state, cart: updatedCartItems };
        case CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }
}

// helper methods
const getItemsForAddToCart = ({ cart }, product) => {
    const { productId } = product;
    if(cart.hasOwnProperty(productId)){
        cart[productId].count += 1;
    } else {
        cart[productId] = { ...product, count:1 };
    }
    return cart;
}

const getItemsForRemoveFromCart = ({ cart }, productId) => {
    if(cart.hasOwnProperty(productId)){
        delete cart[productId];
    }
    return cart;
}
