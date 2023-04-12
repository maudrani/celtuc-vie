import { css } from 'styled-components';
import CssReset from './css-reset';
import { cursor } from './cursor';
import ScrollbarStyles from './scrollbar';

export const global = css`
  body {
    color: ${({ theme }) => theme.colors.font_color_1};
    background: ${({ theme }) => theme.colors.background_1};
    line-height: 1.5;
    font-weight: 400;
    overflow-x: hidden !important;
    font-family: 'Poppins', sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }

  ${CssReset}
  ${ScrollbarStyles}
  ${cursor}
`;
