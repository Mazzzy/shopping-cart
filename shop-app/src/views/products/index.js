import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../store';
import { getAvailableProductsSelector } from '../../store/actions';

import { defineCustomElement } from '../../utils';

import './product-item';
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

    renderProductItem({ productId, name, price, media }) {
      return html `
        <shop-product-item .productId=${productId} .name=${name} .price=${price} .media=${media}></shop-product-item>
      `;
    }

    render() {
      const { products, renderProductItem } = this;
      // repeat: directive for efficient template list items 
      return html`
        <ul class="products-container">
          ${repeat(products, (product) => product.productId, (product) => {
            return html`
              <li>${renderProductItem(product)}</li>
            `;
          })}
        </ul>
      `;
    }
}

defineCustomElement('shop-category-products', ShopProducts);