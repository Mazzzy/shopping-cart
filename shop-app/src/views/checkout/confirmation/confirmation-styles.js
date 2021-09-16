import { css } from 'lit';

export const confirmationStyles = css`
    .check-mark {
        position: relative;
        width: 4rem;
        height: 4rem;
        background-color: hsl(22, 65%, 57%);
        border-radius: 50%;
        margin-bottom: 1.5rem;
    }
    .check-mark:after {
      content: url('./assets/check-mark.svg');
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.6rem;
      height: 1.5rem;
    }
  
    .title {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 0.106rem;
        text-transform: uppercase;
    }

    .message {
        opacity: 0.5;
        margin-bottom: 1.5rem;
    }

    .highlight{
        color: rgb(190, 94, 40);
    }
    .order-wrapper {
        background-color: hsl(0, 0%, 95%);
        color: hsl(0, 0%, 50%);
    }
    
    .order-details {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
    }

    .order-details .order-item-wrapper {
        padding: 1.15rem;
    }

    .order-details hr {
        opacity: 0.08;
    }

    .order-details .order-item {
        display: flex;
        position: relative;
        padding-left: 3.125rem;
        min-height: 3.125rem;
        margin-bottom: 0.75rem;
    }

    .order-item img {
        position: absolute;
        left: 0;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: var(--radius);
    }
    .order-item .info {
        display: flex;
        flex-wrap: wrap;
        margin-left: 1rem;
        width: 100%;
        font-weight: bold;
    }

    .order-item .info > * {
        flex: 1 0 50%;
    }

    .order-item .info-title {
      color: hsl(0, 0%, 0%);
      margin: 0;
    }

    .order-item .info .amount {
      text-align: right;
      color: hsl(0, 0%, 50%);
    }

    .order-details .others-amount {
        padding-top: 0.25rem;
        text-align: center;
        font-size: 0.75rem;
        font-weight: bold;
        color: hsl(0, 0%, 50%);
    }

    .order-details .grand-info {
        padding: 1rem 1.5rem;
        background-color: hsl(0, 0%, 0%);
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }

    .grand-info .grand-title {
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    .grand-info .grand-price {
        font-weight: bold;
        color: hsl(0, 0%, 100%);
        font-size: 1.125rem;
    }
`;