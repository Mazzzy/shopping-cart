import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../../store';

import { defineCustomElement, formatCurrency } from '../../../../utils';

import { summaryItemStyles }  from './summary-item-styles.js';
export class ShopCheckoutSummaryItem extends connect(store)(LitElement) {
    
  static get styles() {
    return summaryItemStyles;
  }

  static get properties() {
    return {
      productId: { type: Number },
      name: { type: String },
      sellingPrice: { type: Number },
      url: { type: String },
      count: { type: Number }
    };
  }

  render() {
    const { productId, name, sellingPrice, url, count } = this;
    return html`
      <div class="summary-item">
        <img src=${url} alt=${`order-summary-item-iamge${name}`}/>
        <div class="info">
          <span class="title">${name}</span>
          <span class="count">x${count}</span>
          <p class="price">${sellingPrice ? formatCurrency(sellingPrice) : '0'}</p>
        </div>
      </div>
    `;
  }
}

defineCustomElement('shop-checkout-summary-item', ShopCheckoutSummaryItem);