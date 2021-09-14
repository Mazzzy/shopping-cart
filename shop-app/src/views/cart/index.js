import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { getAvailableCartSelector } from '../../store/actions';
import { defineCustomElement } from '../../utils';

import './cart-item';
import { cartStyles }  from './cart-styles.js';

export class ShopCart extends connect(store)(LitElement) {
    
    static get styles() {
      return cartStyles;
    }

    static get properties() {
      return {
        cartItems: { type: Array }
      };
    }

    stateChanged(state) { 
      // get cart items (selected products) from the store
      this.cartItems = getAvailableCartSelector(state);
    }

    renderCartItem({ productId, name, sellingPrice, url, count }) {
      return html `
        <shop-cart-item .productId=${productId} .name=${name} .sellingPrice=${sellingPrice} .url=${url} .count=${count}></shop-cart-item>
      `;
    }
    
    render() {
      const { cartItems, renderCartItem } = this;
      // repeat: directive for efficient template list items 
      return html`
        <div class="cart-row cart-header">
          ${cartItems && cartItems.length === 0 ? 
            (html `<span>Shopping cart is empty</span`) : 
            (html `<span>You have ${cartItems.length} products in the cart.</span>`)
          }
        </div>
        <div class="cart-row">
          <ul class="cart-items">
            ${repeat(cartItems, (product) => product.productId, (product) => {
              return html`
                <li>${renderCartItem(product)}</li>
              `;
            })}
          </ul>
        </div>
      `;
    }
}

defineCustomElement('shop-cart', ShopCart);