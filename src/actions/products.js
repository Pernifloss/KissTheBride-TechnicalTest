export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS';
export const FETCHING_PRODUCTS_SUCCESS = 'FETCHING_PRODUCTS_SUCCESS';
export const FETCHING_PRODUCTS_FAILURE = 'FETCHING_PRODUCTS_FAILURE';

export function fetchingProducts() {
    return {
        type: FETCHING_PRODUCTS,
    };
}

export function fetchingProductsSuccess(products) {
    return {
        type: FETCHING_PRODUCTS_SUCCESS,products
    };
}

export function fetchingProductsFailure() {
    return {
        type: FETCHING_PRODUCTS_FAILURE,
    };
}
