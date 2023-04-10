import { createGlobalStyle } from 'styled-components';
import CssReset from './css-reset';
import FontStyles from './fonts';
import ScrollbarStyles from './scrollbar';

export const GlobalStyles = createGlobalStyle`
  ${CssReset}
  ${ScrollbarStyles}
  // Enable later
  // ${FontStyles} 
`;
