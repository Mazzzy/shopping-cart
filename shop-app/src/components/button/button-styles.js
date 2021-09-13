import { css } from 'lit';

export const buttonStyles = css`
    .button {
        padding: 1rem;
        border: 0.1rem #808080 solid;
        cursor: pointer;
    }
    .button:hover {
        border: 0.1rem #404040 solid;
    }
    .button.primary {
        background-color: #f0c040;
    }
    .button.secondary {
        background-color: #f0f0f0;
    }
`;