import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../store';
import { getAvailableProductsSelector } from '../../store/actions';

import { defineCustomElement } from '../../utils';
import { productsStyles }  from './products-styles.js';
export class ShopProducts extends connect(store)(LitElement) {
    
    static get styles() {
      return productsStyles;
    }
    
    static get properties() {
      return {
        categoryId: { type: String },
        products: { type: Array }
      };
    }

    stateChanged(state) { 
      // get available products from the store
      this.products = getAvailableProductsSelector(state);
    }

    render() {
      const { products, categoryId } = this;
      // repeat: directive for efficient template list items 

      return html`
        <h1>Products details page for category(${categoryId})</h1>
        <ol>
          ${repeat(products, (product) => product.productId, ({ productId, name, price }) => {
            const { sellingPrice } = price;
            return html`
              <li>
                ${productId + ':' + name + ':' + sellingPrice}
              </li>`;
          })}
        </ol>
      `;
    }
}

defineCustomElement('shop-category-products', ShopProducts);