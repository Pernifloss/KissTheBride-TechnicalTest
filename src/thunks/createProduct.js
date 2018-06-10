import {
    fetchingCategories, fetchingCategoriesFailure, fetchingCategoriesSuccess
} from "../actions/createProduct";

export function createProductThunk(product) {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingCategories());
        apiClient.creatProduct(product).then((categories) => {
            dispatch(fetchingCategoriesSuccess(categories));
            resolve();
        }).catch((error) => {
            dispatch(fetchingCategoriesFailure(error));
            reject();
        });
    });
}