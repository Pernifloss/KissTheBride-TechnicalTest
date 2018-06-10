import {
    fetchingCategories, fetchingCategoriesFailure, fetchingCategoriesSuccess
} from "../actions/categories";

export function getCategoriesThunk() {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingCategories());
        apiClient.getCategories().then((categories) => {
            dispatch(fetchingCategoriesSuccess(categories));
            resolve();
        }).catch((error) => {
            dispatch(fetchingCategoriesFailure(error));
            reject();
        });
    });
}