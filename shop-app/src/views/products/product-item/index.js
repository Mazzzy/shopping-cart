import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';

import { store } from '../../../store';
import { addToCart } from '../../../store/actions';

import { defineCustomElement, formatCurrency } from '../../../utils';

import '../../../components/card';
import '../../../components/button';
import { productItemStyles }  from './product-item-styles.js';

export class ProductItem extends connect(store)(LitElement) {
    
  static get styles() {
    return productItemStyles;
  }

  static get properties() {
    return {
      productId: { type: Number },
      name: { type: String },
      price: { type: Object },
      media: { type: Object }
    };
  }

  addProductToCart({ productId, name, url, sellingPrice }) {
    // add the product in cart (store)
    store.dispatch(addToCart({ productId, name, url, sellingPrice }))
  }
  
  render() {
    const { productId, name, price, media } = this;
    const { sellingPrice } = price;
    const { url } = media;
    return html `
      <shop-card>
        <div class="product-item">
          <a>
            <img src=${url} alt=${name} />
            <p>${name}</p>
          </a>
          <div class="product-price">
            <div>${sellingPrice ? formatCurrency(sellingPrice) : '0'}</div>
            <shop-button
              .btnCaption=${"Add to cart"}
              .name=${"addToCartBtn"}
              .className=${"primary"}
              .handleClick=${() => {
                this.addProductToCart({ productId, name, url, sellingPrice });
              }}
            ></shop-button>
          </div>
        </div>
      </shop-card>
    `;
  }
}

defineCustomElement('shop-product-item', ProductItem);