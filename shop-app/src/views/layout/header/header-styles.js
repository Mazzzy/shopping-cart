import { css } from 'lit';

export const headerStyles = css`
  .header {
    padding: 20px;
    font-size: 25px;
    text-align: center;
    background: #ffffff;
  }

  .topnav {
    background-color: #4f4c4c;
    overflow: hidden;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: #008cba;
    color: #ffffff;
  }

  .topnav a.cart-icon {
    background-color: rgb(217, 126, 74);
    color: #f0f0f0;
    float: right;
  }

  .topnav a.cart-icon:hover {
    background-color: rgb(190, 94, 40);
  }

  .topnav span.clear {
    clear: both;
  }
`;