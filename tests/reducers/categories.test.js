import categoriesReducer, {initialState} from '../../src/reducers/categories';
import {fetchingCategories, fetchingCategoriesFailure, fetchingCategoriesSuccess} from "../../src/actions/categories";
import categoriesFixtures from '../fixtures/categories.json';

describe('categories reducers', () => {
    let state;

    describe('initial state', () => {
        beforeEach(() => {
            state = initialState()
        });


    });

    describe('fetchingCategoriesSuccess action', () => {
        let state, result;

        beforeEach(() => {

            state = categoriesReducer(undefined, {});

            result = categoriesReducer(state, fetchingCategoriesSuccess(categoriesFixtures));

        });

        it('should add categories into state', () => {

            expect(result.get('categories').size).toEqual(3);
            expect(result.get('categories').get(0).get('name')).toEqual('Sejour');
            expect(result.get('categories').get(0).get('id')).toEqual(1);
            expect(result.get('categories').get(1).get('name')).toEqual('Enfant');
            expect(result.get('categories').get(1).get('id')).toEqual(2);
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetching')).toEqual(false);
        });


    });

    describe('fetchingCategories action', () => {
        let state, result;

        beforeEach(() => {

            state = categoriesReducer(undefined, {});

            result = categoriesReducer(state, fetchingCategories());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(false);
            expect(result.get('fetching')).toEqual(true);
        });


    });
    describe('fetchingCategoriesFailure action', () => {
        let state, result;

        beforeEach(() => {

            state = categoriesReducer(undefined, {});

            result = categoriesReducer(state, fetchingCategoriesFailure());

        });

        it('should set loading and error correctly', () => {
            expect(result.get('fetchingError')).toEqual(true);
            expect(result.get('fetching')).toEqual(false);
        });


    });
});
