import { LitElement, html } from 'lit';
import { defineCustomElement, escapeNullUndefinedAttrVal } from '../../utils';
import { textboxStyles }  from './textbox-styles.js';

export class Textbox extends LitElement {
    
    static get styles() {
      return textboxStyles;
    }

    static get properties() {
      return {
        type: { type: String },
        name: { type: String },
        className: { type: String },
        value: { type: Object },
        handleChange: { type: Function }
      };
    }

    update (changedProperties) {
      super.update()
      console.log('Received instructions to update : ' + changedProperties)
    }

    render() {
      const { type, name, className, value, handleChange } = this;
      const sanitizedType = escapeNullUndefinedAttrVal(type);
      const sanitizedName = escapeNullUndefinedAttrVal(name);
      const sanitizedClassName = escapeNullUndefinedAttrVal(className);
      
      return html`
        <input 
          type=${sanitizedType || 'text'}
          name=${sanitizedName} 
          class=${`input ${sanitizedClassName}`} 
          value=${value}
          @input=${handleChange} 
        />
      `;
    }
}

defineCustomElement('shop-textbox', Textbox);