import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement } from '../../../utils';

import { headerStyles }  from './header-styles.js';

export class Header extends connect(store)(LitElement) {
    
    static get styles() {
      return headerStyles;
    }

    render() {
      return html`
        <div class="topnav">
          <a class="active" href="/">Home</a>
          <a href="/category/1">Category 1</a>
          <a href="/category/2">Category 2</a>
        </div>
        <div class="header">
          <h2>Welcome to Shopping app - select respective category to browse products</h2>
        </div>
      `;
    }
}

defineCustomElement('shop-app-header', Header);