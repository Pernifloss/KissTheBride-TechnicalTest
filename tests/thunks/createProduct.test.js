import {Map, List} from "immutable";

import {createProductThunk} from "../../src/thunks/createProduct"

describe('CreateProduct thunks ', () => {
    let state;

    beforeEach(function () {
        state = Map({
            products: Map({
                creatingProduct: false,
                creatingProductError: false})
        })
    });

    describe("post product", () => {

        test('createProductThunk should dispatch 2 action when success', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                createProduct: jest.fn()
            };
            apiClient.createProduct.mockResolvedValue("ok");

            getStateStub.mockReturnValue(state);

            const product  = {name:"pname"};
            const dispatcher = createProductThunk(product);
            return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

                expect(apiClient.createProduct.mock.calls.length).toEqual(1);
                expect(apiClient.createProduct.mock.calls[0][0]).toEqual(product);
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'CREATING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({
                    type: 'CREATING_PRODUCTS_SUCCESS'
                });


            });

        });


        test('getProductsThunk should dispatch 2 action when fail', () => {

            const dispatchSpy = jest.fn();
            const getStateStub = jest.fn();

            //mock api client
            const apiClient = {
                createProduct: jest.fn()
            };
            apiClient.createProduct.mockRejectedValue(new Error("error"));

            getStateStub.mockReturnValue(state);

            const dispatcher = createProductThunk();
            return dispatcher(dispatchSpy, getStateStub, apiClient).catch(() => {
                expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'CREATING_PRODUCTS'});
                expect(dispatchSpy.mock.calls[1][0]).toEqual({type: 'CREATING_PRODUCTS_FAILURE'});
            });

        });

    });

});
