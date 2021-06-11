import * as actionTypes from '../action/actionType';

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            
            const index = state.cartItems.findIndex(c => c.item._id === action.cartItem._id);
            let newCartItems = [...state.cartItems];
            if ( index === -1 ){
                newCartItems.push({item: action.cartItem, qty: 1});
            } else {
                newCartItems[index].qty += 1;
            }

            let newTotalPrice = state.totalPrice + action.cartItem.price;
            let newTotalItems = state.totalItems + 1;
            return {
                ...state,
                cartItems: newCartItems,
                totalPrice: newTotalPrice,
                totalItems: newTotalItems
            }
        
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                totalPrice: 0,
                totalItems: 0
            }

        default:
            return state;
    }
}

export default reducer;