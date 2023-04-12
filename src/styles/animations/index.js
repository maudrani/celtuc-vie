import { css } from 'styled-components';
import { animate_headline } from './headline';
import { start_overlay } from './overlay';
import { text_images } from './text-images';

export const animations = css`
  ${text_images}
  ${animate_headline}
  ${start_overlay}
`;
