import { css } from 'lit';

export const paymentStyles = css`
    .payment-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 0.6rem;
    }

    /* forms */
    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        list-style-type: none;
        padding: 0;
        list-style-type: none;
    }
    .form-container li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
`;