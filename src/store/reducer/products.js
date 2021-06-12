import * as actionTypes from '../action/actionType';

const initialState = {
    products: [],
}

function compareNameDSC(a, b) {
    if (a.name < b.name) {
        return 1;
    } else if(a.name > b.name) {
        return -1;
    }
    return 0;
}

function compareNameASC(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if(a.name > b.name) {
        return 1;
    }
    return 0;
}

function comparePriceDSC(a, b) {
    if (a.price < b.price) {
        return 1;
    } else if(a.price > b.price) {
        return -1;
    }
    return 0;
}

function comparePriceASC(a, b) {
    if (a.price < b.price) {
        return -1;
    } else if(a.price > b.price) {
        return 1;
    }
    return 0;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.SORT_BY_NAME_ASC:
            const sortByNameASC = [...state.products.sort(compareNameASC)];
            return {
                ...state,
                products: sortByNameASC
            }

        case actionTypes.SORT_BY_NAME_DSC:
            const sortByNameDSC = [...state.products.sort(compareNameDSC)];
            return {
                ...state,
                products: sortByNameDSC
            }
    
        case actionTypes.SORT_BY_PRICE_ASC:
            const sortByPriceASC = [...state.products.sort(comparePriceASC)];
            return {
                ...state,
                products: sortByPriceASC
            }

        case actionTypes.SORT_BY_PRICE_DSC:
            const sortByPriceDSC = [...state.products.sort(comparePriceDSC)]
            return {
                ...state,
                products: sortByPriceDSC
            }

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.productList
            }
        
        default: 
            return state;
    }
}

export default reducer;
