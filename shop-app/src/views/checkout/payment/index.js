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
      enableOrderSummary: { type: Function },
      cardHolderName: { type: String },
      cardNumber: { type: Number },
      cardExpiry: { type: String },
      cardCVV: { type: Number },
      errors: { type: Array }
    };
  }

  constructor () {
    super();
    this.cardHolderName = '';
    this.cardNumber = '';
    this.cardExpiry = '';
    this.cardCVV = '';
    this.errors = [];
  }

  handleTxtChange = (e) => {
    const { name, value } = e.currentTarget;
    // set values in respective property
    this[name] = value;
  }

  triggerEnableOrderSummary() {
    this.enableOrderSummary(true)
  }

  // submit payment details via form
  submit(e) {
    e.preventDefault();
    let form = e.target;
    this.errors = this.checkForErrors(form);
    if (!this.errors.length) {
      // if form contents are valid then move to next step
      this.triggerEnableOrderSummary();
      
      // store payment details in store
      const formData = new FormData(form);
      const cardHolderName = formData.get('cardHolderName');
      const cardNumber = formData.get('cardNumber');
      const cardExpiry = formData.get('cardExpiry');
      const cardCVV = formData.get('cardCVV');
      store.dispatch(addPaymentInCheckout({ cardHolderName, cardNumber, cardExpiry, cardCVV }));
    }
  }

  // validate form fields
  checkForErrors(form) {
    const { cardHolderName, cardNumber, cardExpiry, cardCVV } = form;
    let errors = [];
  
    if (!cardHolderName.value) {
      errors.push('cardHolderName');
    }

    if (!cardNumber.value) {
      errors.push('cardNumber');
    }

    if (!cardExpiry.value) {
      errors.push('cardExpiry');
    }

    if (!cardCVV.value) {
      errors.push('cardCVV');
    }

    return errors;
  }

  // on change check and update errors for form fields
  formValueUpdated(e) {
    let errorList = [...this.errors];
    if (!e.target.value) {
      errorList.push(e.target.name);
    } else {
      let indexOfError = errorList.indexOf(e.target.name);
      if (indexOfError >= 0) {
        errorList.splice(indexOfError, 1);
      }
    }
    this.errors = [...errorList];
  }
  

  render() {
    const { cardHolderName, cardNumber, cardExpiry, cardCVV, handleTxtChange } = this;
    const hasFormError = (name) => (this.errors.indexOf(name) >= 0 ? 'error' : '');

    return html`
      <h1>Payment Details:</h1>
      <div class="payment-container">
        <form 
          @submit="${(e) => this.submit(e)}"
          @change="${(e) => this.formValueUpdated(e)}"
        >
          <ul class="form-container">
            <li>
              <label for="cardHolderName">Card Holder name:</label>
              <shop-textbox
                .hasError=${hasFormError}
                .name=${"cardHolderName"}
                .value=${cardHolderName}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardNumber">Card number:</label>
              <shop-textbox
                .hasError=${hasFormError}
                .type=${"number"}
                .name=${"cardNumber"}
                .value=${cardNumber}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardExpiry">Card Expiry:</label>
              <shop-textbox
                .hasError=${hasFormError}
                .type=${"date"}
                .name=${"cardExpiry"}
                .value=${cardExpiry}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <label for="cardCVV">Card CVV:</label>
              <shop-textbox
                .hasError=${hasFormError}
                .type=${"password"}
                .number=${"number"}
                .name=${"cardCVV"}
                .value=${cardCVV}
                .handleChange=${handleTxtChange}
              />
            </li>
            <li>
              <shop-button
                .type=${"submit"}
                .name=${"proceedToOrderBtn"}
                .btnCaption=${"Place Order"}
                .className=${"primary"}
              />
            </li>
          </ul>
        </form>
      </div>
    `;
  }
}

defineCustomElement('shop-payment', ShopPayment);