import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';

import { store } from '../../../store';
import { CONSTANTS } from '../../../lib/config';
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
      media: { type: String }
    };
  }

  handleAddToCartClick = () => {
    console.log('Hello from:', typeof this.productId)
  }
  

  render() {
    const { name, price, media } = this;
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
            <div>${sellingPrice ? formatCurrency(CONSTANTS.CURRENCY, sellingPrice) : 'NA'}</div>
            <shop-button
              .name=${"addToCartBtn"}
              .className=${"primary"}
              .handleClick=${this.handleAddToCartClick}
            >
              Add to cart
            </shop-button>
          </div>
        </div>
      </shop-card>
    `;
  }
}

defineCustomElement('shop-product-item', ProductItem);