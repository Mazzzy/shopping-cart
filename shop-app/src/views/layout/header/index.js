import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { connect } from 'pwa-helpers';
import { store } from '../../../store';

import { defineCustomElement } from '../../../utils';
import { getAvailableCategoriesSelector } from '../../../store/actions';

import { headerStyles }  from './header-styles.js';

export class Header extends connect(store)(LitElement) {
    
    static get styles() {
      return headerStyles;
    }

    static get properties() {
      return {
        categories: { type: Array }
      };
    }

    stateChanged(state) { 
      // get available categories from the store
      this.categories = getAvailableCategoriesSelector(state);
    }
    
    render() {
      const { categories } = this;
      // repeat: directive for efficient template list items 
      return html`
        <div class="topnav">
          <a class="active" href="/">Home</a>
          ${repeat(categories, (category) => category.id, ({ id, categoryName }) => {
            return html`<a href="/category/${id}">${categoryName}</a>`;
          })}
        </div>
        <div class="header">
          <h2>Welcome to Shopping app - select respective category to browse products</h2>
        </div>
      `;
    }
}

defineCustomElement('shop-app-header', Header);