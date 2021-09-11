import { LitElement, html } from 'lit';
import { defineCustomElement } from '../../utils';

import { categoryStyles }  from './category-styles.js';

export class ShopCategory extends LitElement {
    
    static get styles() {
      return categoryStyles;
    }
  
    constructor() {
      super();
    }
  
    render() {
      return html`
        <h1>Category details page</h1>
      `;
    }
}

defineCustomElement('shop-category-products', ShopCategory);