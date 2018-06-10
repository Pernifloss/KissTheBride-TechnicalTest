import {Map, List} from "immutable";
import {getCategoriesThunk} from "../../src/thunks/categories"
import categoriesFixtures from '../fixtures/categories.json'


describe('Categories thunks ', () => {
    let state;

    beforeEach(function () {
        state = Map({
            categories: Map({categories: List()}),
            pagination: Map({pageSize: 10, currentPage: 1})
        })
    });

    test('getCategoriesThunk should dispatch 2 action when success', () => {

        const dispatchSpy = jest.fn();
        const getStateStub = jest.fn();

        //mock api client
        const apiClient = {
            getCategories: jest.fn()
        };
        apiClient.getCategories.mockResolvedValue(categoriesFixtures);

        getStateStub.mockReturnValue(state);

        const dispatcher = getCategoriesThunk();
        return dispatcher(dispatchSpy, getStateStub, apiClient).then(() => {

            expect(apiClient.getCategories.mock.calls.length).toEqual(1);
            expect(dispatchSpy.mock.calls[0][0]).toEqual({type: 'FETCHING_CATEGORIES'});
            expect(dispatchSpy.mock.calls[1][0]).toEqual({
                type: 'FETCHING_CATEGORIES_SUCCESS',
                categories: categoriesFixtures
            });


        });

    });

});
