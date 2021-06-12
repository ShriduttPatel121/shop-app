import * as actionTypes from '../action/actionType';
const initialState = {
    userName: '',
    isGuest: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.AUTH_USER:
            return {
                ...state,
                isGuest: false,
                userName: action.creds.email
            }

        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                isGuest: true,
                userName: '',
            }    

        default:
            return state;
    }
}

export default reducer;