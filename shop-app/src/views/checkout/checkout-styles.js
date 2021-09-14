import { css } from 'lit';

export const checkoutStyles = css`
    :host {
        width: 100%;
    }
    .checkout-content {
        display: flex;
        flex-wrap: wrap;
    }
    .checkout-main {
        flex: 2 40rem;
    }
    .checkout-sidebar {
        flex: 1 20rem;
    }
`;