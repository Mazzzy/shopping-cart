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
        address: { type: String }
      };
    }

    constructor () {
      super();
      this.email = '';
      this.name = '';
      this.address = '';
    }

    handleTxtChange = (e) => {
      const { name, value } = e.currentTarget;
      // set values in respective property
      this[name] = value;
    }

    validateForm({ email, name, address }) {
      return email && name && address;
    }

    triggerEnablePayment() {
      this.enablePayment(true)
    }
  
    render() {
      const { email, name, address, handleTxtChange, validateForm } = this;
      
      return html`
        <h1>Shipment Details:</h1>
        <div class="shipment-container">
          <form method="POST">
            <ul class="form-container">
              <li>
                <label for="email">Email:</label>
                <shop-textbox
                  .type=${"email"}
                  .name=${"email"}
                  .value=${email}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
                <label for="name">Name:</label>
                <shop-textbox
                  .name=${"name"}
                  .value=${name}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
                <label for="address">Address:</label>
                <shop-textbox
                  .name=${"address"}
                  .value=${address}
                  .handleChange=${handleTxtChange}
                />
              </li>
              <li>
                ${validateForm({ email, name, address }) && (
                  html `
                    <shop-button
                      .type=${"submit"}
                      .name=${"proceedToPayBtn"}
                      .className=${"primary"}
                      .handleClick=${() => {
                        console.log('Display payment option')
                        this.triggerEnablePayment();

                        // store shipment details in store
                        store.dispatch(addShipmentInCheckout({ email, name, address }));
                      }}
                    >
                      Proceed to Pay
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

defineCustomElement('shop-shipment', ShopShipment);