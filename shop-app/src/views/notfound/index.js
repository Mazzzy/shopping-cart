import { LitElement, html, css } from 'lit';
import { defineCustomElement } from '../../utils';

export class NotFound extends LitElement {
  static get styles() {
    return css`
      :host{
        color: #D2042D;
      }
    `;
  }

  render() {
    return html`
      <div>
        <h1>Sorry, we couldn't find that page</h1>
      </div>
      <a href="/">Go to the home page</a>
    `;
  }
}

defineCustomElement('not-found', NotFound);
