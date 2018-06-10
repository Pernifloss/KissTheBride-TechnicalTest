import {Map} from "immutable";
import {
    FETCHING_PRODUCTS_COUNT, FETCHING_PRODUCTS_COUNT_FAILURE, FETCHING_PRODUCTS_COUNT_SUCCESS, SET_CURRENT_PAGE,

} from "../actions/pagination";

export const initialState = () => {
    return Map({
        pageSize: 10,
        currentPage: 0,
        count: 0,
        fetchingProductsMetadata: false,
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case FETCHING_PRODUCTS_COUNT:
            return state.set('fetchingProductsMetadata', true)
                .set('fetchingError', false);
        case FETCHING_PRODUCTS_COUNT_SUCCESS:
            return state.set('count', action.count)
                .set('fetchingProductsMetadata', false);
        case FETCHING_PRODUCTS_COUNT_FAILURE:
            return state.set('fetchingProductsMetadata', false)
                .set('fetchingError', false);
        case SET_CURRENT_PAGE:
            return state.set('currentPage', action.currentPage);
    }

    return state;
}
