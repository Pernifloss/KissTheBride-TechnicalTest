import {createSelector} from 'reselect';
const getProducts = (state) => state.getIn(['products', 'products']);
const getCurrentPage = (state) => state.getIn(['pagination', 'currentPage']);

export const selectProductForCurrentPage = createSelector(
    [getProducts, getCurrentPage],
    (products, currentPage) => {
        return products.has(currentPage) ? products.get(currentPage).toJS() : null;
    }
);
