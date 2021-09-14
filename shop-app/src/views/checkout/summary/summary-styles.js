import { css } from 'lit';

export const summaryStyles = css`
    .summary-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 1.5rem;
    }

    .summary-title {
        font-size: 1.125rem;
        text-transform: uppercase;
    }
    
    .cart-items {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 0;
        list-style-type: none;
        width: 100%;
    }

    .cart-items li {
        position: relative;
        min-height: 4rem;
    }

    .total-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .total-field {
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        color: hsl(0, 0%, 50%);
        border-bottom: 1px solid #858585;
        padding: 0.6rem 0;
    }
    .total-field:last-child {
        margin-top: 1.5rem;
        border-bottom: none;
    }
    .price {
      font-size: 1.125rem;
      font-weight: bold;
      color: hsl(0, 0%, 0%);
    }
    .grand-total {
        color: hsl(22, 65%, 57%);
    }
`;