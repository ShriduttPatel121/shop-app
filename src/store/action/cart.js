import * as actions from './actionType';

export const addToCart = (cartItem) => {
    return {
        type: actions.ADD_TO_CART,
        cartItem
    }
}

export const clearCart = () => {
    return {
        type: actions.CLEAR_CART
    }
}