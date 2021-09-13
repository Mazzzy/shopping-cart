import { css } from 'lit';

export const productsStyles = css`
    /* Products */
    .products-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    .products-container li {
        list-style-type: none;
        padding: 1rem;
        flex: 0 1 24rem;
        margin-bottom: 1rem;
    }
`;