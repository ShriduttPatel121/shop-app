import * as actions from './actionType';

export const loginUser = (creds) => {
    return {
        type: actions.AUTH_USER,
        creds
    }
}

export const logoutUser = () => {
    return {
        type: actions.LOGOUT_USER,
    }
}