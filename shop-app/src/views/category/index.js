import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';
import { getSelectedCategorySelector } from '../../store/actions';

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