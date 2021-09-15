import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';
import { setCategories } from '../../store/actions';

import { API_DETAILS } from '../../lib/config';
import { getApiDataByUrl } from '../../lib/services';
import { defineCustomElement } from '../../utils';

import './header';
import './footer';
import { layoutStyles }  from './layout-styles.js';
export class ShopLayout extends connect(store)(LitElement) {
    
    static get styles() {
      return layoutStyles;
    }

    connectedCallback() {
      super.connectedCallback();
      this._getCategories();
    }

    async _getCategories() {
      try {
        const getCategoriesURL = API_DETAILS.CATEGORY_URL;
        // get categories via service (API) call
        const respData = await getApiDataByUrl(getCategoriesURL);
        if(respData && respData.length) {
          // set the fetched categories in store
          store.dispatch(setCategories(respData));
        }
      } catch (error) {
        console.log('Error in getting categories', error)
      }
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