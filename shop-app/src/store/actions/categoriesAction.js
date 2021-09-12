import { createSelector } from 'reselect';
import { SET_CATEGORIES } from '../types';

// dispatches to set fetched (via API call) categories inside store
export const setCategories = (categoriesList) => {
    return {
        type: SET_CATEGORIES,
        payload: categoriesList,
    };
};

// get available categories list from the store
const getCategoriesSelector = state => state.categories;
export const getAvailableCategoriesSelector = createSelector(
    getCategoriesSelector,
    ({ categories }) => (categories)
);