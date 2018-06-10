import {fromJS,  Map, List} from "immutable";
import {FETCHING_CATEGORIES, FETCHING_CATEGORIES_FAILURE, FETCHING_CATEGORIES_SUCCESS} from "../actions/categories";

export const initialState = () => {
    return Map({
        categories: List(),
        fetching: false,
        fetchingError: false
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case FETCHING_CATEGORIES:
            return state.set('fetching', true)
                .set('fetchingError', false);
        case FETCHING_CATEGORIES_SUCCESS:
            return state.set('fetching', false)
                .set('categories', fromJS(action.categories));
        case FETCHING_CATEGORIES_FAILURE:
            return state.set('fetching', false)
                .set('fetchingError', true);
    }
    return state;
}
