import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';

import { defineCustomElement } from '../../utils';

import './header';
import './footer';
import { layoutStyles }  from './layout-styles.js';
export class ShopLayout extends connect(store)(LitElement) {
    
    static get styles() {
      return layoutStyles;
    }

    render() {
      return html`
        <div>
          <shop-app-header></shop-app-header>
          <!-- for routed views : start -->
            <div class="main-contents">
              <slot></slot>
            </div>
          <!-- for routed views : end -->
          <shop-app-footer></shop-app-footer>
        </div>
      `;
    }
}

defineCustomElement('shop-app-layout', ShopLayout);