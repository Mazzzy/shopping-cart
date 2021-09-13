import { css } from 'lit';

export const productItemStyles = css`
    .product-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .product-item img {
        max-width: 25rem;
        max-height: 18.75rem;
    }
    .product-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product-price div,
    .product-price button {
        flex: 1;
        text-align: center;
    }
    .product-price div {
        font-size: 2rem;
    }
`;