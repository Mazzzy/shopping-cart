import { LitElement, html } from 'lit';
import { defineCustomElement } from '../../utils';

const logo = new URL('../../../assets/open-wc-logo.svg', import.meta.url).href;
import { homeStyles }  from './home-styles.js';

export class ShopHome extends LitElement {
    static get properties() {
      return {
        title: { type: String },
      };
    }
  
    static get styles() {
      return homeStyles;
    }
  
    constructor() {
      super();
      this.title = 'Welcome to main home!';
    }
  
    render() {
      return html`
        <main>
          <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
          <h1>${this.title}</h1>
        </main>
        <p class="app-footer">
          Made with love by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mazzzy"
            >Mazzzy</a
          >.
        </p>
      `;
    }
}

defineCustomElement('shop-home', ShopHome);