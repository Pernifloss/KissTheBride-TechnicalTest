export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export function setSearchQuery(searchQuery) {
    return {
        type: SET_SEARCH_QUERY,searchQuery
    };
}
