import productsReducer, {initialState} from '../../src/reducers/products';
import {fetchingProducts, fetchingProductsFailure, fetchingProductsSuccess} from "../../src/actions/products";
import productsFixtures from '../fixtures/products.json';

describe('products reducers', () => {
    let state;

    describe('initial state', () => {
        beforeEach(() => {
            state = initialState()
        });


    });

    describe('fetchingProductsSuccess action', () => {
        let state, result;

        beforeEach(() => {

            state = productsReducer(undefined, {});

            result = productsReducer(state, fetchingProductsSuccess(productsFixtures,0));

        });

        it('should add products into state', () => {

            expect(result.getIn(['products',0]).size).toEqual(33);
            expect(result.getIn(['products',0]).get(0).get('name')).toEqual('0001');
            expect(result.getIn(['products',0]).get(0).get('description')).toEqual('un petit test');
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetchingProducts')).toEqual(false);
        });


    });

    describe('fetchingProducts action', () => {
        let state, result;

        beforeEach(() => {

            state = productsReducer(undefined, {});

            result = productsReducer(state, fetchingProducts());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetchingProducts')).toEqual(true);
        });


    });
    describe('fetchingProductsFailure action', () => {
        let state, result;

        beforeEach(() => {

            state = productsReducer(undefined, {});

            result = productsReducer(state, fetchingProductsFailure());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(true);
            expect(result.get('fetchingProducts')).toEqual(false);
        });


    });
});
