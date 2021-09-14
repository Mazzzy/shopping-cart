import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { lazyReducerEnhancer } from 'pwa-helpers'

import { storeLogger } from '../utils';
import { categoriesReducer, productsReducer, cartReducer } from './reducers';

// init store state
const initialState = {}

// configure store with initial state, preloaded and combinations
const configureStore = preloadedState => (
    createStore(
      state => state,
      preloadedState,
      compose(lazyReducerEnhancer(combineReducers), applyMiddleware(storeLogger))
    )
);

// combine reducers
const rootReducer = {
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
};

// configure store and add reducers
export const store = configureStore({ ...initialState })
store.addReducers(rootReducer)
