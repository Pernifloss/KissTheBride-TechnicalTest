import {Map} from "immutable";
import {SET_SEARCH_QUERY} from "../actions/search";

export const initialState = () => {
    return Map({
        query : ''
    });
};

export default (state = initialState(), action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return state.set('query', action.searchQuery);

    }

    return state;
}
