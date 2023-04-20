import { createGlobalStyle } from 'styled-components';
import { global } from './global';
/* import { animations } from './animations';
import { helpers } from './helpers';
import { preloader } from './preloader';
import { progress_wrap } from './progress-wrap';
import { typography } from './typography';
import { UNCATEGORIZED_Dark } from './UNCATEGORIZED/dark';
import { UNCATEGORIZED_Light } from './UNCATEGORIZED/light'; */

/* const cssLeftToCategorize = {
  dark: UNCATEGORIZED_Dark,
  light: UNCATEGORIZED_Light,
}; */

export const GlobalStyles = createGlobalStyle`
    ${global}
    
    .margin-center {
      margin: 0 auto;
    }
`;

export default GlobalStyles;
