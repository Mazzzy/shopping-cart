import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { Router } from '@vaadin/router';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { getAvailableCartSelector } from '../../store/actions';
import { defineCustomElement, formatCurrency, getAmountDiscountAndGrandTotal } from '../../utils';

import './cart-item';
import '../../components/button';
import { cartStyles }  from './cart-styles.js';

export class ShopCart extends connect(store)(LitElement) {
    
    static get styles() {
      return cartStyles;
    }

    static get properties() {
      return {
        cartItems: { type: Array }
      };
    }

    stateChanged(state) { 
      // get cart items (selected products) from the store
      this.cartItems = getAvailableCartSelector(state);
    }

    renderCartItem({ productId, name, sellingPrice, url, count }) {
      return html `
        <shop-cart-item .productId=${productId} .name=${name} .sellingPrice=${sellingPrice} .url=${url} .count=${count}></shop-cart-item>
      `;
    }
    
    render() {
      const { cartItems, renderCartItem } = this;
      const cartItemsLength = cartItems && cartItems.length;
      // get calculated amount details
      const { 
        itemsTotal, 
        discountPercent, 
        discountAmount, 
        grandTotal } = getAmountDiscountAndGrandTotal(cartItems);
      
      // repeat: directive for efficient template list items 
      return html`
        <div class="cart-row cart-header">
          ${cartItemsLength === 0 ? 
            (html `<span>Shopping cart is empty</span`) : 
            (html `<span>You have ${cartItemsLength} products in the cart.</span>`)
          }
        </div>
        <div class="cart-row">
          <ul class="cart-items">
            ${repeat(cartItems, (product) => product.productId, (product) => {
              return html`
                <li>${renderCartItem(product)}</li>
              `;
            })}
          </ul>
        </div>
        <div class="cart-row">
          <div class="total">
            <div>
              ${cartItemsLength ? 
                (
                  html `
                  <p>
                    Total: ${formatCurrency(itemsTotal)}
                  </p>
                  <p>
                    Discount: ${discountPercent} %
                  </p>
                  <p>
                    Discount Amount: ${formatCurrency(discountAmount)}
                  </p>
                  <p>
                    Grand total: <span class="grand-total">${formatCurrency(grandTotal)}</span>
                  </p>
                  <shop-button
                    .name=${"proceedToCheckoutBtn"}
                    .className=${"primary"}
                    .handleClick=${() => {
                      console.log('Proceed clicked');
                      // move to checkout view
                      Router.go('/checkout');
                    }}
                  >
                    Proceed
                  </shop-button>
                  `
                ) : 
                (html ``)
              }
            </div>
          </div>
        </div>
      `;
    }
}

defineCustomElement('shop-cart', ShopCart);