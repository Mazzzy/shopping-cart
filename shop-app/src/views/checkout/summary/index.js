import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement, formatCurrency } from '../../../utils';
import { getAvailableCartSelector } from '../../../store/actions';
import { CONSTANTS } from '../../../lib/config';

import '../../../components/button';
import './summary-item';
import { summaryStyles }  from './summary-styles.js';
export class ShopCheckoutSummary extends connect(store)(LitElement) {
    
  static get styles() {
    return summaryStyles;
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

  renderSummaryCartItem({ productId, name, sellingPrice, url, count }) {
    return html `
      <shop-checkout-summary-item .productId=${productId} .name=${name} .sellingPrice=${sellingPrice} .url=${url} .count=${count}></shop-checkout-summary-item>
    `;
  }

  render() {
    const { cartItems, renderSummaryCartItem } = this;
    const cartItemsLength = cartItems && cartItems.length;
    // repeat: directive for efficient template list items 
    return html`
      <div class="summary-container">
        ${cartItemsLength !== 0 ? 
          (html `
            <h6 class="summary-title">Order Summary</h6>
            <ul class="cart-items">
              ${repeat(cartItems, (product) => product.productId, (product) => {
                return html`
                  <li>${renderSummaryCartItem(product)}</li>
                `;
              })}
            </ul>
            <div class="total-container">
              <p class="total-field">
                total
                <span class="price">
                  ${
                    formatCurrency(
                      CONSTANTS.CURRENCY, 
                      cartItems.reduce((a, c) => a + c.sellingPrice * c.count, 0))
                  }
                </span>
              </p>
              <p class="total-field">
                shipping
                <span class="price">
                  ${
                    formatCurrency(CONSTANTS.CURRENCY, 35)
                  }
                </span>
              </p>
              <p class="total-field">
                vat (included)
                <span class="price">
                  ${
                    formatCurrency(CONSTANTS.CURRENCY, 15)
                  }
                </span>
              </p>
              <p class="total-field">
                grand total
                <span class="price grand-total">
                  ${
                    formatCurrency(CONSTANTS.CURRENCY, 20+35+15)
                  }
                </span>
              </p>
            </div>
            <shop-button
              .name=${"placeOrderBtn"}
              .className=${"primary"}
              .handleClick=${() => {
                console.log('Order Placed');
              }}
            >
              Pay & Place Order
            </shop-button>
          `) : ''}
      </div>
    `;
  }
}

defineCustomElement('shop-checkout-summary', ShopCheckoutSummary);