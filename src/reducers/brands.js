import {fromJS,  Map, List} from "immutable";
import {FETCHING_BRANDS, FETCHING_BRANDS_FAILURE, FETCHING_BRANDS_SUCCESS} from "../actions/brands";

export const initialState = () => {
    return Map({
        brands: List(),
        fetching: false,
        fetchingError: false
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case FETCHING_BRANDS:
            return state.set('fetching', true)
                .set('fetchingError', false);
        case FETCHING_BRANDS_SUCCESS:
            return state.set('fetching', false)
                .set('brands', fromJS(action.brands));
        case FETCHING_BRANDS_FAILURE:
            return state.set('fetching', false)
                .set('fetchingError', true);
    }
    return state;
}
