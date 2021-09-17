import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';
import { addShipmentInCheckout } from '../../../store/actions';

import { defineCustomElement } from '../../../utils';
import '../../../components/textbox';
import '../../../components/button';
import { shipmentStyles }  from './shipment-styles.js';

export class ShopShipment extends connect(store)(LitElement) {
    
    static get styles() {
      return shipmentStyles;
    }

    static get properties() {
      return {
        enablePayment: { type: Function },
        email: { type: String },
        name: { type: String },
        address: { type: String },
        errors: { type: Array }
      };
    }

    constructor () {
      super();
      this.email = '';
      this.name = '';
      this.address = '';

      this.errors = [];
    }

    handleTxtChange = (e) => {
      const { name, value } = e.currentTarget;
      // set values in respective property
      this[name] = value;
    }

    // trigger to enable flag for displaying payment options
    triggerEnablePayment() {
      this.enablePayment(true)
    }

    // submit shipment details via form
    submit(e) {
      e.preventDefault();
      let form = e.target;
      this.errors = this.checkForErrors(form);
      if (!this.errors.length) {
        // if form contents are valid then move to next step
        this.triggerEnablePayment();

        // store shipment details in store
        const formData = new FormData(form);
        const email = formData.get('email');
        const name = formData.get('name');
        const address = formData.get('address');
        store.dispatch(addShipmentInCheckout({ name, email, address }));
      }
    }

    // validate form fields
    checkForErrors(form) {
      const { email, name, address } = form;
      let errors = [];
   
      if (!name.value) {
        errors.push('name');
      }
  
      if (!email.value) {
        errors.push('email');
      }
  
      if (!address.value) {
        errors.push('address');
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
      const { email, name, address, handleTxtChange } = this;
      const hasFormError = (name) => (this.errors.indexOf(name) >= 0 ? 'error' : '');
      return html `
        <h1>Shipment Details:</h1>
        <div class="shipment-container">
          <form 
            @submit="${(e) => this.submit(e)}"
            @change="${(e) => this.formValueUpdated(e)}"
            >
            <ul class="form-container">
              <li>
                <label for="email">Email:</label>
                <shop-textbox
                  .hasError=${hasFormError}
                  .type=${"email"}
                  .name=${"email"}
                  .value=${email}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
                <label for="name">Name:</label>
                <shop-textbox
                  .hasError=${hasFormError}
                  .name=${"name"}
                  .value=${name}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
                <label for="address">Address:</label>
                <shop-textbox
                  .hasError=${hasFormError}
                  .name=${"address"}
                  .value=${address}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
              <shop-button
                .type=${"submit"}
                .name=${"proceedToPayBtn"}
                .btnCaption=${"Proceed to pay"}
                .className=${"primary"}
              />
              </li>
            </ul>
          </form>
        </div>
      `;
    }
}

defineCustomElement('shop-shipment', ShopShipment);