export const FETCHING_CATEGORIES = 'FETCHING_CATEGORIES';
export const FETCHING_CATEGORIES_SUCCESS = 'FETCHING_CATEGORIES_SUCCESS';
export const FETCHING_CATEGORIES_FAILURE = 'FETCHING_CATEGORIES_FAILURE';


export function fetchingCategories() {
    return {
        type: FETCHING_CATEGORIES,
    };
}

export function fetchingCategoriesSuccess(categories) {
    return {
        type: FETCHING_CATEGORIES_SUCCESS, categories
    };
}

export function fetchingCategoriesFailure() {
    return {
        type: FETCHING_CATEGORIES_FAILURE,
    };
}