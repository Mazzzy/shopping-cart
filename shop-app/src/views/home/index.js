import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';

const logo = new URL('../../../assets/open-wc-logo.svg', import.meta.url).href;
import { homeStyles }  from './home-styles.js';

export class ShopHome extends connect(store)(LitElement) {
    
    static get styles() {
      return homeStyles;
    }
  
    render() {
      return html`
        <main>
          <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
          <h1>Home to your shopping needs</h1>
          <p>Click specific category from top menu to browse through products!</p>
        </main>
      `;
    }
}

defineCustomElement('shop-home', ShopHome);