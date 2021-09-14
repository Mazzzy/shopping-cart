import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';

import './shipment';
import './payment';
import './summary';

import { checkoutStyles }  from './checkout-styles.js';
export class ShopCheckout extends connect(store)(LitElement) {
    
    static get styles() {
      return checkoutStyles;
    }

    static get properties() {
      return {
        enablePayment: { type: Boolean }
      };
    }

    constructor() {
      super();
      this.enablePayment = false;
    }

    render() {
      const { enablePayment } = this;
      return html`
        <div class="checkout-content">
          <div class="checkout-item">
            <shop-shipment 
              .enablePayment=${(flag) => {
                console.log('Payment enabled:', flag);
                this.enablePayment = flag;
              }}
            ></shop-shipment>
          </div>
          <div class="checkout-item">
            ${enablePayment ? (html `<shop-payment></shop-payment>`) : ''}
          </div>
          <div class="checkout-item">
              <shop-checkout-summary></shop-checkout-summary>
          </div>
        </div>
      `;
    }
}

defineCustomElement('shop-checkout', ShopCheckout);