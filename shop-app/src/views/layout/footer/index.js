import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement } from '../../../utils';

import { footerStyles }  from './footer-styles.js';

export class Footer extends connect(store)(LitElement) {
    
    static get styles() {
      return footerStyles;
    }

    render() {
      return html`
        <p class="footer">
          Made with love by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Mazzzy">Mazzzy</a>.
        </p>
      `;
    }
}

defineCustomElement('shop-app-footer', Footer);