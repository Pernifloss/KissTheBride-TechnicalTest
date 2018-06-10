import brandsReducer, {initialState} from '../../src/reducers/brands';
import {fetchingBrands, fetchingBrandsFailure, fetchingBrandsSuccess} from "../../src/actions/brands";
import brandsFixtures from '../fixtures/brands.json';

describe('brands reducers', () => {
    let state;

    describe('initial state', () => {
        beforeEach(() => {
            state = initialState()
        });


    });

    describe('fetchingBrandsSuccess action', () => {
        let state, result;

        beforeEach(() => {

            state = brandsReducer(undefined, {});

            result = brandsReducer(state, fetchingBrandsSuccess(brandsFixtures));

        });

        it('should add brands into state', () => {

            expect(result.get('brands').size).toEqual(2);
            expect(result.get('brands').get(0).get('name')).toEqual('Disney');
            expect(result.get('brands').get(0).get('id')).toEqual(1);
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetching')).toEqual(false);
        });


    });

    describe('fetchingBrands action', () => {
        let state, result;

        beforeEach(() => {

            state = brandsReducer(undefined, {});

            result = brandsReducer(state, fetchingBrands());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetching')).toEqual(true);
        });


    });
    describe('fetchingBrandsFailure action', () => {
        let state, result;

        beforeEach(() => {

            state = brandsReducer(undefined, {});

            result = brandsReducer(state, fetchingBrandsFailure());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(true);
            expect(result.get('fetching')).toEqual(false);
        });


    });
});
