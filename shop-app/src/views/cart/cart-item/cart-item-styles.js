import { css } from 'lit';

export const cartItemStyles = css`
    :host {
        width: 100%;
    }
    .cart-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.6rem;
        margin: 0.6rem 0;
    }
    .cart-item img {
        max-width: 16rem;
    }

    .cart-items > div {
        padding: 0.5rem;
    }
    .cart-items > div:last-child {
        flex: 1;
    }

    .cart-item .img-container {
        flex: 0 0 16%;
    }

    .cart-item .info {
        display: flex;
        flex-direction: column;
        flex: 1 0 60%;
        padding: 1.75rem 0;
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 1.56rem;
    }

    .cart-item .info-head {
        display: flex;
        justify-content: space-between;
        padding-right: 8rem;
    }

    .cart-item .title {
        font-size: 1.6rem;
        line-height: 1.8rem;
        margin-bottom: 2rem;
        letter-spacing: 0.1rem;
        font-weight: 200;
    }
    .cart-item .count {
        text-align: right;
        opacity: 0.5;
    }
    .cart-item .price {
        opacity: 0.5;
    }
    .cart-item .count-btn {
        margin: 0.5rem 0;
    }

    .cart-item .last-container {
        flex: 0 0 20%;
    }
`;