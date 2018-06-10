export const CREATING_PRODUCTS = 'CREATING_PRODUCTS';
export const CREATING_PRODUCTS_SUCCESS = 'CREATING_PRODUCTS_SUCCESS';
export const CREATING_PRODUCTS_FAILURE = 'CREATING_PRODUCTS_FAILURE';


export function creatingProducts() {
    return {
        type: CREATING_PRODUCTS,
    };
}

export function creatingProductsSuccess() {
    return {
        type: CREATING_PRODUCTS_SUCCESS
    };
}

export function creatingProductsFailure() {
    return {
        type: CREATING_PRODUCTS_FAILURE
    };
}