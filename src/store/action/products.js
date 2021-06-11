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