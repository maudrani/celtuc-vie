import { css } from 'styled-components';
import CssReset from './css-reset';
import { cursor } from './cursor';
import ScrollbarStyles from './scrollbar';
import { paddings } from './spacings';

export const global = css`
  body {
    color: ${({ theme }) => theme.colors.font_color_1};
    background: ${({ theme }) => theme.colors.background_1};
    line-height: 1.5;
    font-weight: 400;
    overflow-x: hidden !important;
    font-family: 'Source Sans Pro', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }

  ${CssReset}
  ${ScrollbarStyles}
  ${cursor}
  ${paddings}
`;
