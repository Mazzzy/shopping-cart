import { css } from 'lit';

export const cardStyles = css`
    .card {
        background-color: transparent;
        box-shadow: 0px 2px 4px #858585;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        padding: 0.8rem;
    }
    .card:hover {
        box-shadow: none;
        border: 1px solid #858585;
    }
`;