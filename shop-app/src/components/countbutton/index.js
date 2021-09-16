import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { countButtonStyles }  from './countbutton-styles.js';

export class CountButton extends LitElement {
    
    static get styles() {
      return countButtonStyles;
    }

    static get properties() {
      return {
        value: { type: String },
        handleIncClick: { type: Function },
        handleDecClick: { type: Function }
      };
    }

    render() {
      const { value, handleIncClick, handleDecClick } = this;
      const sanitizedValue = escapeNullUndefinedAttrVal(value);
      
      return html`
        <div class="count-button">
          <div class="count-action" @click=${handleDecClick}>-</div>
          <div class="count-value">${sanitizedValue}</div>
          <div class="count-action" @click=${handleIncClick}>+</div>
        </div>
      `;
    }
}

defineCustomElement('shop-count-button', CountButton);