import {Map, List} from "immutable";
import {getBrandsThunk} from "../../src/thunks/brands"
import brandsFixtures from '../fixtures/brands.json'


describe('Brands thunks ', () => {
    let state;

    beforeEach(function () {
        state = Map({
            brands: Map({brands: List()}),
            pagination: Map({pageSize: 10, currentPage: 1})
        })
    });

    test('getBrandsThunk should dispatch 2 action when success', () => {

        const dispatchSpy = jest.fn();
        const getStateStub = jest.fn();

        //mock api client
        const apiClient = {
            getBrands: jest.fn()
        };
        apiClient.getBrands.mockResolvedValue(brandsFixtures);

        getStateStub.mockReturnValue(state);

        const dispatcher = getBrandsThunk();
        return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

            expect(apiClient.getBrands.mock.calls.length).toEqual(1);
            expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_BRANDS'});
            expect(dispatchSpy.mock.calls[1][0]).toEqual({
                type: 'FETCHING_BRANDS_SUCCESS',
                brands: brandsFixtures
            });


        });

    });

});
