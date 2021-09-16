import { css } from 'lit';

export const buttonStyles = css`
    .button {
        padding: 1rem;
        border: 0.1rem #808080 solid;
        cursor: pointer;
        width:100%;
        font-weight: 700;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    .button:hover {
        border: 0.1rem #404040 solid;
    }
    .button.primary {
        background-color: rgb(217, 126, 74);
        color: #f0f0f0;
    }
    .button.primary:hover {
        background-color: rgb(190, 94, 40);
    }
    .button.secondary {
        background-color: #f0f0f0;
    }
`;