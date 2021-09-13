import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { cardStyles }  from './card-styles.js';

export class Card extends LitElement {
    
    static get styles() {
      return cardStyles;
    }

    static get properties() {
      return {
        className: { type: String }
      };
    }

    render() {
      const { className } = this;
      const sanitizedClassName = escapeNullUndefinedAttrVal(className);

      return html`
        <div class=${`card ${sanitizedClassName}`}>
          <slot></slot>
        </div>
      `;
    }
}

defineCustomElement('shop-card', Card);