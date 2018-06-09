import {
    fetchingProducts, fetchingProductsFailure, fetchingProductsSuccess
} from "../actions/products";
export function getProductsThunk() {
    return (dispatch, getStaten, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingProducts());
        apiClient.getProducts().then((products)=>{
            dispatch(fetchingProductsSuccess(products));
            resolve();
        }).catch((error)=>{
            dispatch(fetchingProductsFailure(error))
            reject();
        });
    });
}
