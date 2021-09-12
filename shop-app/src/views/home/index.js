import { LitElement, html } from 'lit';
import { connect } from 'pwa-helpers';
import { store } from '../../store';
import { setCategories } from '../../store/actions';

import { API_DETAILS } from '../../lib/config';
import { getApiDataByUrl } from '../../lib/services';

import { defineCustomElement } from '../../utils';

const logo = new URL('../../../assets/open-wc-logo.svg', import.meta.url).href;
import { homeStyles }  from './home-styles.js';

export class ShopHome extends connect(store)(LitElement) {
    
    static get styles() {
      return homeStyles;
    }
  
    connectedCallback() {
      super.connectedCallback();
      this._getCategories();
    }

    async _getCategories() {
      try {
        const getCategoriesURL = API_DETAILS.BASE_URL + API_DETAILS.GET_CATEGORIES;
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
        <main>
          <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
          <h1>Home to your shopping needs</h1>
          <p>Click specific category from top menu to browse through products!</p>
        </main>
      `;
    }
}

defineCustomElement('shop-home', ShopHome);