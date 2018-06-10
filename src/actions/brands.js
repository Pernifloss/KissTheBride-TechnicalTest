export const FETCHING_BRANDS = 'FETCHING_BRANDS';
export const FETCHING_BRANDS_SUCCESS = 'FETCHING_BRANDS_SUCCESS';
export const FETCHING_BRANDS_FAILURE = 'FETCHING_BRANDS_FAILURE';


export function fetchingBrands() {
    return {
        type: FETCHING_BRANDS,
    };
}

export function fetchingBrandsSuccess(brands) {
    return {
        type: FETCHING_BRANDS_SUCCESS, brands
    };
}

export function fetchingBrandsFailure() {
    return {
        type: FETCHING_BRANDS_FAILURE,
    };
}