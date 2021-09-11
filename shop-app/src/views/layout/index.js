import { LitElement, html } from 'lit';
import { defineCustomElement } from '../../utils';

import { layoutStyles }  from './layout-styles.js';

export class ShopLayout extends LitElement {
    
    static get styles() {
      return layoutStyles;
    }
  
    constructor() {
      super();
    }
  
    render() {
      return html`
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/category/1">category1</a>
        <a href="/category/1">category2</a>
      </div>
      <div class="header">
        <h2>Shopping app - select respective category</h2>
      </div>

      <slot></slot>
      `;
    }
}

defineCustomElement('shop-app-layout', ShopLayout);