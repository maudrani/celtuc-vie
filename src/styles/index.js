import { createGlobalStyle } from 'styled-components';
import { global } from './global';
import { font_family } from './typography/fonts';

export const GlobalStyles = createGlobalStyle`
    ${global}
    ${font_family}
    
    .margin-center {
      margin: 0 auto;
    }
`;

export default GlobalStyles;
