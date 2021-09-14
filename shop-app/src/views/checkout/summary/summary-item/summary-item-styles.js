import { css } from 'lit';

export const summaryItemStyles = css`
    .summary-item {
        position: relative;
        padding: 0.5rem 0rem 0.5rem 4rem;
        min-height: 4rem;
    }
    .summary-item img {
        position: absolute;
        top: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
    }
    .summary-item .info {
        display: flex;
        flex-wrap: wrap;
        margin-left: 1rem;
        font-weight: bold;
    }
    .summary-item .info > * {
        flex: 1 1 50%;
    }
    .summary-item .count {
        text-align: right;
        opacity: 0.5;
    }
    .summary-item .price {
        opacity: 0.5;
        font-size: 0.82rem;
    }
`;