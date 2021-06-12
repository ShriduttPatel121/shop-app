import * as actions from './actionType';

export const sortNameASC = () => {
    return {
        type: actions.SORT_BY_NAME_ASC
    }
}

export const sortNameDSC = () => {
    return {
        type: actions.SORT_BY_NAME_DSC
    }
}

export const sortPriceASC = () => {
    return {
        type: actions.SORT_BY_PRICE_ASC
    }
}

export const sortPriceDSC = () => {
    return {
        type: actions.SORT_BY_PRICE_DSC
    }
}

const fetchProductsSuccess = (productList) => {
    return {
        type: actions.FETCH_PRODUCTS_SUCCESS,
        productList
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:8080/prof/getAllProducts");

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        
            const resData = await response.json();
            dispatch(fetchProductsSuccess(resData));
        } catch(e) {
            throw e;
        }
    }
}