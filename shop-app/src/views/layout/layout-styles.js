import { css } from 'lit';
import { resetStyles, utilStyles } from '../../lib/styles';

export const layoutStyles = css`
  ${resetStyles}
  ${utilStyles}
  .main-contents {
    display: flex;
  }
`;