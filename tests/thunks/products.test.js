import {Map, List} from "immutable";

import {getProductsMetadata, getProductsThunk} from "../../src/thunks/products"
import productsFixtures from '../fixtures/products.json'

describe('Products thunks ', () => {
    let state;

    beforeEach(function () {
        state = Map({
            products: Map({products: List()}),
            pagination: Map({pageSize: 10, currentPage: 1})
        })
    });

    describe("fetch products  with paginations", () => {

        test('getProductsThunk should dispatch 2 action when success', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                getProducts: jest.fn()
            };
            apiClient.getProducts.mockResolvedValue({products: productsFixtures});

            getStateStub.mockReturnValue(state);

            const dispatcher = getProductsThunk();
            return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

                expect(apiClient.getProducts.mock.calls.length).toEqual(1);
                expect(apiClient.getProducts.mock.calls[0][0]).toEqual({"limit": 10, "start": 10});
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({
                    type: 'FETCHING_PRODUCTS_SUCCESS',
                    "pageNumber": 1,
                    products: productsFixtures
                });


            });

        });


        test('getProductsThunk should dispatch 2 action when fail', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                getProducts: jest.fn()
            };
            apiClient.getProducts.mockRejectedValue(productsFixtures);

            getStateStub.mockReturnValue(state);

            const dispatcher = getProductsThunk();
            return dispatcher(dispatchSpy, getStateStub, apiClient).catch(() => {
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({type: 'FETCHING_PRODUCTS_FAILURE'});
            });

        });

        test('getProductsThunk', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                getProducts: jest.fn()
            };
            apiClient.getProducts.mockRejectedValue(productsFixtures);

            getStateStub.mockReturnValue(state);

            const dispatcher = getProductsThunk();
            return dispatcher(dispatchSpy, getStateStub, apiClient).catch(() => {
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({type: 'FETCHING_PRODUCTS_FAILURE'});
            });

        });

        test('getProductsMetadataThunk should dispatch 2 action when success', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                getProducts: jest.fn()
            };
            apiClient.getProducts.mockResolvedValue({count: 5});

            getStateStub.mockReturnValue(state);

            const dispatcher = getProductsMetadata();
            return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

                expect(apiClient.getProducts.mock.calls.length).toEqual(1);
                expect(apiClient.getProducts.mock.calls[0][0]).toEqual({"limit": 0, "start": 0});
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_PRODUCTS_COUNT'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({type: 'FETCHING_PRODUCTS_COUNT_SUCCESS', count: 5});


            });

        });
    });

});
