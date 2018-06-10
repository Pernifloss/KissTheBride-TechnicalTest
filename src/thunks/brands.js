import {
    fetchingBrands, fetchingBrandsFailure, fetchingBrandsSuccess
} from "../actions/brands";

export function getBrandsThunk() {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingBrands());
        apiClient.getBrands().then((brands) => {
            dispatch(fetchingBrandsSuccess(brands));
            resolve();
        }).catch((error) => {
            dispatch(fetchingBrandsFailure(error));
            reject();
        });
    });
}