import { createGlobalStyle } from 'styled-components';
import { animations } from './animations';
import { global } from './global';
import { helpers } from './helpers';
import { preloader } from './preloader';
import { progress_wrap } from './progress-wrap';
import { typography } from './typography';

export const GlobalStyles = createGlobalStyle`
    ${global}
    ${animations}
    ${helpers}
    ${preloader}
    ${typography}
    ${progress_wrap}
`;

export default GlobalStyles;
