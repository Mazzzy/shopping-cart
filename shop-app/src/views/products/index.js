import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';

import { productsStyles }  from './products-styles.js';
export class ShopProducts extends connect(store)(LitElement) {
    
    static get styles() {
      return productsStyles;
    }
    
    static get properties() {
      return {
        categoryId: { type: String }
      };
    }

    render() {
      console.log('Id===', this.categoryId);
      return html`
        <h1>Products details page</h1>
      `;
    }
}

defineCustomElement('shop-category-products', ShopProducts);