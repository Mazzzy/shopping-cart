import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { textboxStyles }  from './textbox-styles.js';

export class Textbox extends LitElement {
    
    static get properties() {
      return {
        type: { type: String },
        name: { type: String },
        className: { type: String },
        value: { type: Object },
        handleChange: { type: Function },
        hasError: { type: Function }
      };
    }

    update (changedProperties) {
      super.update()
      console.log('Received instructions to update : ' + changedProperties)
    }

    createRenderRoot() {
      return this;
    }

    render() {
      const { type, name, className, value, handleChange, hasError } = this;
      const sanitizedType = escapeNullUndefinedAttrVal(type);
      const sanitizedName = escapeNullUndefinedAttrVal(name);
      const sanitizedClassName = escapeNullUndefinedAttrVal(className);
      
      return html`
        <style>
          ${textboxStyles}
        </style>
        <input 
          type=${sanitizedType || 'text'}
          name=${sanitizedName} 
          class=${`input ${sanitizedClassName} ${hasError ? hasError(name) : ''}`} 
          value=${value}
          @input=${handleChange} 
        />
      `;
    }
}

defineCustomElement('shop-textbox', Textbox);