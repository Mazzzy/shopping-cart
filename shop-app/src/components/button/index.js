import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { buttonStyles }  from './button-styles.js';

export class Button extends LitElement {
    
    static get styles() {
      return buttonStyles;
    }

    static get properties() {
      return {
        name: { type: String },
        className: { type: String },
        handleClick: { type: Function }
      };
    }

    render() {
      const { name, className, handleClick } = this;
      const sanitizedName = escapeNullUndefinedAttrVal(name);
      const sanitizedClassName = escapeNullUndefinedAttrVal(className);
      
      return html`
        <button class=${`button ${sanitizedClassName}`} name=${sanitizedName} @click=${handleClick}>
          <slot></slot>
        </button>
      `;
    }
}

defineCustomElement('shop-button', Button);