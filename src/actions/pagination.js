
export const FETCHING_PRODUCTS_COUNT = 'FETCHING_PRODUCTS_COUNT';
export const FETCHING_PRODUCTS_COUNT_SUCCESS = 'FETCHING_PRODUCTS_COUNT_SUCCESS';
export const FETCHING_PRODUCTS_COUNT_FAILURE = 'FETCHING_PRODUCTS_COUNT_FAILURE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


export function fetchingProductCount() {
    return {
        type: FETCHING_PRODUCTS_COUNT,
    };
}

export function fetchingProductCountSuccess(count) {
    return {
        type: FETCHING_PRODUCTS_COUNT_SUCCESS, count
    };
}

export function fetchingProductCountFailure() {
    return {
        type: FETCHING_PRODUCTS_COUNT_FAILURE,
    };
}


export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,currentPage
    };
}
