import { css } from 'lit';

export const cartItemStyles = css`
    .cart-item {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #858585;
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
`;