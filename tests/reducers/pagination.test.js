import paginationReducer, {initialState} from '../../src/reducers/pagination';
import {
    fetchingProductCount, fetchingProductCountFailure,
    fetchingProductCountSuccess,
} from "../../src/actions/pagination";
describe('pagination reducers', () => {
    let state;

    beforeEach(() => {
        state = initialState()
    });


    describe('pagination action', () => {
        let state, result;

        beforeEach(() => {

            state = paginationReducer(undefined, {});

            result = paginationReducer(state, fetchingProductCountSuccess(150));

        });

        it('should add count into state', () => {

            expect(result.get('count')).toEqual(150);
            expect(result.get('fetchingProductsMetadata')).toEqual(false);
        });


    });

});
