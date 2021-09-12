import { createSelector } from 'reselect';
import { SET_CATEGORIES, SET_SELECTED_CATEGORY } from '../types';

// dispatches to set fetched (via API call) categories inside store
export const setCategories = (categoriesList) => {
  return {
      type: SET_CATEGORIES,
      payload: categoriesList,
  };
};

// dispatched to set the clicked category as selected one [used to get products by category]
export const setSelectedCategory = (categoryItem) => {
  return {
    type: SET_SELECTED_CATEGORY,
    payload: categoryItem,
  };
};

// selectors to get categories from store
const getCategoriesSelector = state => state.categories;

// get available categories list from the store
export const getAvailableCategoriesSelector = createSelector(
  getCategoriesSelector,
  ({ categories }) => (categories)
);

// // get selected category from store
export const getSelectedCategorySelector = createSelector(
  getCategoriesSelector,
  ({ selectedCategory }) => (selectedCategory)
);
