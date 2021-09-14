import { css } from 'lit';

export const cartStyles = css`
    :host {
        width: 100%;
    }
    .cart-row {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        margin: 10px;
    }
    .cart-header {
        border-bottom: 1px #c0c0c0 solid;
    }
    .cart-items {
        padding: 0;
        list-style-type: none;
        width: 100%;
    }
    .cart-items li {
        display: flex;
    }
`;