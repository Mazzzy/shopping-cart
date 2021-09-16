import { css } from 'lit';

export const countButtonStyles = css`
    .count-button {
        background-color: hsl(0, 0%, 95%);
        display: inline-flex;
        text-align: center;
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 2rem;
    }

    .count-button .count-action {
        font-size: 0.875rem;
        opacity: 0.25;
        width: 2rem;
        cursor: pointer;
    }

    .count-button .count-action:hover {
        font-size: 1rem;
        opacity: 0.8;
    }
    .count-button .count-value {
        opacity: 1;
    }
`;