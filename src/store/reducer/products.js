import * as actionTypes from '../action/actionType';

const initialState = {
    products: [
        {name: "Smasung A71 Mobile", description: "Nice smart phone and in budget", price: 350, _id: 1 },
        {name: "Mop", description: "To clean dirty floor", price: 30, _id: 2 },
        {name: "Laptop", description: "To make great web-apps in ReactJs", price: 850, _id: 3 },
    ],
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
        
        default: 
            return state;
    }
}

export default reducer;


/* const pro = [
    {name: "Smasung A71 Mobile", description: "Nice smart phone and in budget", price: 350, _id: 1 },
    {name: "Mop", description: "To clean dirty floor", price: 30, _id: 2 },
    {name: "Laptop", description: "To make great web-apps", price: 850, _id: 3 },
] */