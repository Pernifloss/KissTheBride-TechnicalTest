import {Map, List} from "immutable";

import {getProductsThunk} from "../../src/thunks/products"
import productsFixtures from '../fixtures/products.json'
describe('Products thunks ', () => {
    let state;

    beforeEach(function () {
        state = Map({products :Map({products:List()})})
    });

    describe("fetch productsFixtures ", () => {

        beforeEach(() => {

        });


        test('getProductsThunk should dispatch 2 action when success', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                getProducts: jest.fn()
            };
            apiClient.getProducts.mockResolvedValue(productsFixtures);

            getStateStub.mockReturnValue(state);

            const dispatcher = getProductsThunk();
            return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

                expect(apiClient.getProducts.mock.calls.length).toEqual(1);
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({type: 'FETCHING_PRODUCTS_SUCCESS',products:productsFixtures});


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
    });

});
