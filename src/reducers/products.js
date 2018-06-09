import {Map, List, fromJS} from "immutable";
import {FETCHING_PRODUCTS, FETCHING_PRODUCTS_FAILURE, FETCHING_PRODUCTS_SUCCESS} from "../actions/products";

export const initialState = () => {
    return Map({
        products: List(),
        fetchingProducts: false,
        fetchingError: false
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case FETCHING_PRODUCTS:
            return state.set('fetchingProducts',true)
                .set('fetchingError',false);
        case FETCHING_PRODUCTS_SUCCESS:
            return state.set('fetchingProducts',false)
                .set('products', fromJS(action.products));
        case FETCHING_PRODUCTS_FAILURE:
            return state.set('fetchingProducts',false)
        .set('fetchingError',true);
    }

    return state;
}
