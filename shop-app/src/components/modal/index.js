import { LitElement, html } from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';

import '../button';
import { modalStyles }  from './modal-styles.js';

export class Modal extends LitElement {
    
    static get styles() {
      return modalStyles;
    }

    static get properties() {
      return {
        open: { type: Boolean },
        title: { type: String },
        text: { type: String },
        actionBtnCaption: { type: String }
      };
    }
  
    constructor() {
      super();
      this.open = false;
    }

    close() {
      this.open = false;
    }
  
    handleClick() {
      this.dispatchEvent(new CustomEvent('button-click'));
      this.close();
    }

    render() {
    const { open, close, title, handleClick , actionBtnCaption } = this;
    const sanitizedTitle = escapeNullUndefinedAttrVal(title);
    const sanitizedActionBtnCaption = escapeNullUndefinedAttrVal(actionBtnCaption);
    return html `
      <div class="${classMap({modalwrapper: true, open: open})}">
        <div class="modal-content">
          <a href="#" title="Close" class="modal-close" @click="${close}">Close</a>
          <h1>${sanitizedTitle}</h1>
          <div>
          <slot></slot>
          </div>
          <shop-button
            .className=${"primary modal-action-btn"}
            .handleClick=${handleClick}
          >
            ${sanitizedActionBtnCaption}
          </shop-button>
        </div>
      </div>
    `;
    }
}

defineCustomElement('shop-modal', Modal);