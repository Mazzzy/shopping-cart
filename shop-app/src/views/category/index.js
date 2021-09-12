import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { getSelectedCategorySelector, setProducts } from '../../store/actions';
import { API_DETAILS } from '../../lib/config';
import { getApiDataByUrl } from '../../lib/services';

import { defineCustomElement } from '../../utils';

import '../products';
import { categoryStyles }  from './category-styles.js';
export class ShopCategory extends connect(store)(LitElement) {
    
    static get styles() {
      return categoryStyles;
    }

    static get properties() {
      return {
        selectedCategory: { type: Object }
      };
    }

    connectedCallback() {
      super.connectedCallback();
      this._getProducts();
    }

    async _getProducts() {
      try {
        const { selectedCategory } = this;
        const { id } = selectedCategory || {};
        const getProductsURL = API_DETAILS.BASE_URL + API_DETAILS.GET_CATEGORIES + `/${id}`;
        // get products via service (API) call
        const respData = await getApiDataByUrl(getProductsURL);
        if(respData && respData.length) {
          // set the fetched categories in store
          store.dispatch(setProducts(respData));
        }
      } catch (error) {
        console.log('Error in getting products', error)
      }
    }


    stateChanged(state) { 
      // get selected category from the store
      this.selectedCategory = getSelectedCategorySelector(state);
    }
  
    render() {
      const { selectedCategory } = this;
      const { id, categoryName, mediaUrl } = selectedCategory || {};

      return html`
        <h1>${categoryName} details page: </h1>
        <shop-category-products .categoryId=${id}></shop-category-products>
      `;
    }
}

defineCustomElement('shop-category', ShopCategory);