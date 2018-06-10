import {
    fetchingProducts, fetchingProductsFailure, fetchingProductsSuccess
} from "../actions/products";
import {
    fetchingProductCount, fetchingProductCountFailure,
    fetchingProductCountSuccess,
} from "../actions/pagination";

export function getProductsThunk() {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingProducts());
        const state = getState();
        const pageNumber = state.getIn(['pagination', 'currentPage']);
        const pageSize = state.getIn(['pagination', 'pageSize']);
        apiClient.getProducts({start: pageNumber * pageSize, limit: pageSize}).then(({products}) => {
            dispatch(fetchingProductsSuccess(products, pageNumber));
            resolve();
        }).catch((error) => {
            dispatch(fetchingProductsFailure(error));
            reject();
        });
    });
}

export function getProductsMetadata() {
    return (dispatch, getState, apiClient) => new Promise((resolve, reject) => {
        dispatch(fetchingProductCount());
        apiClient.getProducts({start: 0, limit: 0}).then(({count}) => {
            dispatch(fetchingProductCountSuccess(Number(count)));
            resolve();
        }).catch((error) => {
            dispatch(fetchingProductCountFailure(error));
            reject();
        });
    });
}

