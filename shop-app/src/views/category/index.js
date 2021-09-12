import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';

import { categoryStyles }  from './category-styles.js';
export class ShopCategory extends connect(store)(LitElement) {
    
    static get styles() {
      return categoryStyles;
    }
  
    render() {
      return html`
        <h1>Category details page</h1>
      `;
    }
}

defineCustomElement('shop-category-products', ShopCategory);