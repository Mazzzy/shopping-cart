import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement, formatCurrency } from '../../../utils';
import { 
  createOrder,
  getAvailableCartSelector, 
  getAvailableCheckoutShipmentSelector, 
  getAvailableCheckoutPaymentSelector 
} from '../../../store/actions';

import '../../../components/button';
import './summary-item';
import { summaryStyles }  from './summary-styles.js';
export class ShopCheckoutSummary extends connect(store)(LitElement) {
    
  static get styles() {
    return summaryStyles;
  }

  static get properties() {
    return {
      cartItems: { type: Array },
      shipmentDetails: { type: Object },
      paymentDetails: { type: Object },
    };
  }

  stateChanged(state) { 
    // get cart items (selected products) from the store
    this.cartItems = getAvailableCartSelector(state);
    // get available checkout details (shipmeny & payment) from store for placing order
    this.shipmentDetails = getAvailableCheckoutShipmentSelector(state);
    this.paymentDetails = getAvailableCheckoutPaymentSelector(state);
  }

  renderSummaryCartItem({ productId, name, sellingPrice, url, count }) {
    return html `
      <shop-checkout-summary-item .productId=${productId} .name=${name} .sellingPrice=${sellingPrice} .url=${url} .count=${count}></shop-checkout-summary-item>
    `;
  }

  handlePlaceOrder = () => {
    const { shipmentDetails, paymentDetails, cartItems } = this;
    const orderData = {
      person: {
        ...shipmentDetails,
        ...paymentDetails
      },
      products: {
        ...cartItems
      }
    }
    // create and place order
    store.dispatch(createOrder(orderData));
  }

  render() {
    const { cartItems, renderSummaryCartItem, handlePlaceOrder } = this;
    const cartItemsLength = cartItems && cartItems.length;
    // repeat: directive for efficient template list items 
    return html`
      <h1>Selected Products Details:</h1>
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
                      cartItems.reduce((a, c) => a + c.sellingPrice * c.count, 0))
                  }
                </span>
              </p>
              <p class="total-field">
                shipping
                <span class="price">
                  ${
                    formatCurrency(35)
                  }
                </span>
              </p>
              <p class="total-field">
                vat (included)
                <span class="price">
                  ${
                    formatCurrency(15)
                  }
                </span>
              </p>
              <p class="total-field">
                grand total
                <span class="price grand-total">
                  ${
                    formatCurrency(20+35+15)
                  }
                </span>
              </p>
            </div>
            <shop-button
              .name=${"placeOrderBtn"}
              .className=${"primary"}
              .handleClick=${handlePlaceOrder}
            >
              Pay & Place Order
            </shop-button>
          `) : 
          (html `<span>Order summary is empty</span`)
        }
      </div>
    `;
  }
}

defineCustomElement('shop-checkout-summary', ShopCheckoutSummary);