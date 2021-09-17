import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement, formatCurrency, getAmountDiscountAndGrandTotal } from '../../../utils';
import { API_DETAILS } from '../../../lib/config';
import { postApiDataByUrl } from '../../../lib/services';
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
      enableConfirmation: { type: Function },
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

  // to place order 
  triggerPlaceOrder = (amountDetails) => {
    const { shipmentDetails, paymentDetails, cartItems } = this;
    const orderData = {
      person: {
        ...shipmentDetails,
        ...paymentDetails
      },
      products: cartItems,
      amountDetail: {
        ...amountDetails
      }
    }
    
    // save the order 
    this._saveOrder(orderData);
  }

  // api call to place order
  _saveOrder = async (orderData) => {
    try {
      const saveOrderURL = API_DETAILS.ORDER_URL;
      // save order via service (API) call
      const respData = await postApiDataByUrl(saveOrderURL, orderData);
      if(respData && respData.length) {
        console.log('Save Order response:', respData);
        // create and place order
        store.dispatch(createOrder(orderData));

        // show confirmation message
        this.triggerEnableConfirmation();
      }
    } catch (error) {
      console.log('Error in saving order', error)
    }
  }

  // trigger to enable flag for confirmation message display
  triggerEnableConfirmation() {
    this.enableConfirmation(true)
  }

  render() {
    const { cartItems, renderSummaryCartItem, triggerPlaceOrder } = this;
    const cartItemsLength = cartItems && cartItems.length;
    // get calculated amount details
    const { 
      itemsTotal, 
      discountPercent, 
      discountAmount, 
      grandTotal } = getAmountDiscountAndGrandTotal(cartItems);

    let amountDetails = {}
    if(cartItemsLength !== 0) {
      // to store amount details in order record
      amountDetails = {
        itemsTotal,
        discountPercent,
        discountAmount,
        grandTotal
      }
    }

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
                    formatCurrency(itemsTotal)
                  }
                </span>
              </p>
              <p class="total-field">
                Discount (%)
                <span class="price">
                  ${discountPercent}
                </span>
              </p>
              <p class="total-field">
                Discount (included)
                <span class="price">
                  ${
                    formatCurrency(discountAmount)
                  }
                </span>
              </p>
              <p class="total-field">
                grand total
                <span class="price grand-total">
                  ${
                    formatCurrency(grandTotal)
                  }
                </span>
              </p>
            </div>
            <shop-button
              .btnCaption=${"Pay & Place Order"}
              .name=${"placeOrderBtn"}
              .className=${"primary"}
              .handleClick=${
                () => { 
                  triggerPlaceOrder(amountDetails) 
                }
              }
            ></shop-button>
          `) : 
          (html `<span>Order summary is empty</span`)
        }
      </div>
    `;
  }
}

defineCustomElement('shop-checkout-summary', ShopCheckoutSummary);