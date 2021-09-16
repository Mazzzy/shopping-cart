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
        background: #ffffff;
        margin: 0.5rem 0;
    }

    .total {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .total div,
    .total button {
        flex: 1;
        text-align: center;
    }

    .total div {
        font-size: 2rem;
    }
`;