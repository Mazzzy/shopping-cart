import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';
import { getAvailablePlacedOrderSelector, clearOrder } from '../../../store/actions';
import { defineCustomElement, isEmptyObject, formatCurrency, getCartItemsTotal } from '../../../utils';

import '../../../components/modal';
import { confirmationStyles }  from './confirmation-styles.js';

export class ShopConfirmation extends connect(store)(LitElement) {
    
    static get styles() {
      return confirmationStyles;
    }

    static get properties() {
      return {
        orderDetails: { type: Object }
      };
    }

    stateChanged(state) { 
      // get order details from the store
      this.orderDetails = getAvailablePlacedOrderSelector(state);
    }

    handleActionBtnClick() {
      console.log('Back to home')
    }
  
    render() {
      const { orderDetails, handleActionBtnClick } = this;

      let email = "";
      let grandTotal = 0;
      let cartItemsLength = 0;

      let firstCartItem = {
        name: '',
        url: '',
        count: 0,
        sellingPrice: 0
      };

      let address = '';

      const isOrderDetailsAvailable = !(isEmptyObject(orderDetails));
      
      if(isOrderDetailsAvailable){
        const { person, products, amountDetail } = orderDetails;
        // take respective vals to display
        if(!isEmptyObject(person)) {
          email = person.email;
          address = person.address;
        }

        if(products && products.length ) {
          firstCartItem = products[0];
          cartItemsLength = products.length;
        }

        if(!isEmptyObject(amountDetail)) {
          grandTotal = amountDetail.grandTotal;
        }

      }
      return html`
        ${isOrderDetailsAvailable ? (html `
          <shop-modal 
            .open=${true} 
            .actionBtnCaption=${"Back to home"}
            @button-click="${this.handleActionBtnClick}"
          >
            <div class='check-mark'></div>
            <h5 class='title'>
              thank you <br /> for your order
            </h5>
            <p class='message'>You will receive an email confirmation on <span class="highlight">${email}</span> shortly.</p>
            <p class='message'>Esimated arrival of #5 days on <span class="highlight">${address}</span></p>
            <div class="order-wrapper">
              <div class="order-details">
                <div class="order-item-wrapper">
                  <div class="order-item">
                    <img src=${firstCartItem.url} alt='order item image ' />
                    <div class='info'>
                      <p class='info-title'>${firstCartItem.name}</p>
                      <span class='amount'>x${firstCartItem.count}</span>
                      <p class='price'>${formatCurrency(firstCartItem.sellingPrice)}</p>
                    </div>
                  </div>
                  <hr />
                  <div class='others-amount'>
                    and ${cartItemsLength - 1} other item(s)
                  </div>
                </div>
                <div class="grand-info">
                  <p class='grand-title'>Grand total</p>
                  <p class='grand-price'>${formatCurrency(grandTotal)}</p>
                </div>
              </div>
            </div>
          </shop-modal>
        `) : ''}
      `;
    }
}

defineCustomElement('shop-confirmation', ShopConfirmation);