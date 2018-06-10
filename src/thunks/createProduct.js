import {
    creatingProducts, creatingProductsFailure,creatingProductsSuccess
} from "../actions/createProduct";

export function createProductThunk(product) {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(creatingProducts());
        apiClient.createProduct(product).then(() => {
            dispatch(creatingProductsSuccess());
            resolve();
        }).catch((error) => {
            dispatch(creatingProductsFailure(error));
            reject();
        });
    });
}