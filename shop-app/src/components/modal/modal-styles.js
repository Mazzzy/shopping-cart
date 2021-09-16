import { css } from 'lit';

export const modalStyles = css`
    .modalwrapper {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s;
      }
      .modalwrapper:not(.open) {
        visibility: hidden;
        opacity: 0;
      }
      .modalwrapper.open {
        visibility: visible;
        opacity: 1;
        pointer-events: auto;
      }
      .modalwrapper .modal-content {
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2em;
        background: white;
    }
    .modalwrapper header {
        font-weight: bold;
    }
    .modalwrapper h1 {
        font-size: 150%;
        margin: 0 0 15px;
    }

    .modal-close {
        color: #aaa;
        line-height: 50px;
        font-size: 80%;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
        width: 70px;
        text-decoration: none;
    }
    .modal-close:hover {
        color: black;
    }
`;