import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';

import { store } from '../../../store';
import { removeFromCart, toggleProductItemCountInCart } from '../../../store/actions';

import { defineCustomElement, formatCurrency } from '../../../utils';

import '../../../components/button';
import '../../../components/countbutton';
import { cartItemStyles }  from './cart-item-styles.js';
export class CartItem extends connect(store)(LitElement) {
    
  static get styles() {
    return cartItemStyles;
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

  toggleProductCount(type, productId) {
    // toggle the product count based on type
    store.dispatch(toggleProductItemCountInCart(type, productId))
  }

  removeProductFromCart(productId) {
    // remove the product from cart (store)
    store.dispatch(removeFromCart(productId))
  }

  render() {
    const { productId, name, sellingPrice, url, count } = this;
    return html `
      <div class="cart-item">
        <div class="img-container">
          <img src=${url} alt=${name} />
        </div>
        <div class="info">
          <div class="info-head">
            <span class="title">${name}</span>
            <span class="count">x${count}</span>
          </div>
          <p class="price">${sellingPrice ? formatCurrency(sellingPrice) : '0'}</p>
          <div class="count-btn">
            <shop-count-button 
              .value=${count} 
              .handleIncClick=${() => {
                this.toggleProductCount('inc', productId);
              }}
              .handleDecClick=${() => {
                this.toggleProductCount('dec', productId);
              }}
            ></shop-count-button>
          </div>
        </div>
        <div class="last-container">
          <shop-button
            .name=${"removeFromCartBtn"}
            .className=${"secondary"}
            .handleClick=${() => {
              this.removeProductFromCart(productId);
            }}
          >
            Remove
          </shop-button>
        </div>
      </div>
    `;
  }
}

defineCustomElement('shop-cart-item', CartItem);