import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { buttonStyles }  from './button-styles.js';

export class Button extends LitElement {
    
    static get styles() {
      return buttonStyles;
    }

    static get properties() {
      return {
        type: { type: String },
        name: { type: String },
        btnCaption: { type: String },
        className: { type: String },
        handleClick: { type: Function }
      };
    }

    createRenderRoot() {
      return this;
    }

    render() {
      const { type, name, btnCaption, className, handleClick } = this;
      const sanitizedType = escapeNullUndefinedAttrVal(type);
      const sanitizedName = escapeNullUndefinedAttrVal(name);
      const sanitizedBtnCaption = escapeNullUndefinedAttrVal(btnCaption);
      const sanitizedClassName = escapeNullUndefinedAttrVal(className);
      
      return html`
        <style>
          ${buttonStyles}
        </style>
        <button 
          type=${sanitizedType || 'button'}
          class=${`button ${sanitizedClassName}`} 
          name=${sanitizedName} 
          @click=${handleClick}
        >
          ${sanitizedBtnCaption}
        </button>
      `;
    }
}

defineCustomElement('shop-button', Button);