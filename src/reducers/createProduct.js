import {Map} from "immutable";
import {CREATING_PRODUCTS, CREATING_PRODUCTS_SUCCESS, CREATING_PRODUCTS_FAILURE} from "../actions/createProduct";

export const initialState = () => {
    return Map({
        creatingProduct: false,
        creatingProductError: false
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case CREATING_PRODUCTS:
            return state.set('fetchingError', true)
                .set('creatingProductError', false);
        case CREATING_PRODUCTS_SUCCESS:
            return state.set('creatingProduct', false);
        case CREATING_PRODUCTS_FAILURE:
            return state.set('creatingProduct', false)
                .set('creatingProductError', false);
    }
    return state;
}
