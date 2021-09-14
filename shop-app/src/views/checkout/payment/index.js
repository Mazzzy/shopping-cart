import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';
import { addPaymentInCheckout } from '../../../store/actions';

import { defineCustomElement } from '../../../utils';
import { paymentStyles }  from './payment-styles.js';
export class ShopPayment extends connect(store)(LitElement) {
    
  static get styles() {
    return paymentStyles;
  }

  static get properties() {
    return {
      cardHolderName: { type: String },
      cardNumber: { type: Number },
      cardExpiry: { type: String },
      cardCVV: { type: Number }
    };
  }

  constructor () {
    super();
    this.cardHolderName = '';
    this.cardNumber = 0;
    this.cardExpiry = '';
    this.cardCVV = 0;
  }

  handleTxtChange = (e) => {
    const { name, value } = e.currentTarget;
    // set values in respective property
    this[name] = value;
  }

  validateForm({ cardHolderName, cardNumber, cardExpiry, cardCVV }) {
    return cardHolderName && cardNumber && cardExpiry && cardCVV;
  }

  render() {
    const { cardHolderName, cardNumber, cardExpiry, cardCVV, handleTxtChange, validateForm } = this;
    
    return html`
      <h1>Payment Details:</h1>
      <div class="payment-container">
        <form method="POST">
          <ul class="form-container">
            <li>
              <label for="cardHolderName">Card Holder name:</label>
              <shop-textbox
                .name=${"cardHolderName"}
                .value=${cardHolderName}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardNumber">Card number:</label>
              <shop-textbox
                .type=${"number"}
                .name=${"cardNumber"}
                .value=${cardNumber}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardExpiry">Card Expiry:</label>
              <shop-textbox
                .name=${"cardExpiry"}
                .value=${cardExpiry}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardCVV">Card CVV:</label>
              <shop-textbox
                .type=${"password"}
                .number=${"number"}
                .name=${"cardCVV"}
                .value=${cardCVV}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              ${validateForm({ cardHolderName, cardNumber, cardExpiry, cardCVV }) && (
                html `
                  <shop-button
                    .type=${"submit"}
                    .name=${"proceedToOrderBtn"}
                    .className=${"primary"}
                    .handleClick=${() => {
                      console.log('Order place?')
                      // store payment details in store
                      store.dispatch(addPaymentInCheckout({ cardHolderName, cardNumber, cardExpiry, cardCVV }));
                    }}
                  >
                    Place Order
                  </shop-button>
                `)
              }
            </li>
          </ul>
        </form>
      </div>
    `;
  }
}

defineCustomElement('shop-payment', ShopPayment);