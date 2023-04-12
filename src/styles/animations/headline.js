import { css } from 'styled-components';

export const animate_headline = css`
  .cd-words-wrapper {
    display: inline-block;
    position: relative;
    text-align: left;
  }

  .cd-words-wrapper b {
    display: inline-block;
    position: absolute;
    white-space: nowrap;
    left: 0;
    top: 0;
  }

  .cd-words-wrapper b.is-visible {
    position: relative;
  }

  .no-js .cd-words-wrapper b {
    opacity: 0;
  }

  .no-js .cd-words-wrapper b.is-visible {
    opacity: 1;
  }

  /* xclip */
  .cd-headline.clip span {
    display: inline-block;
  }

  .cd-headline.clip .cd-words-wrapper {
    overflow: hidden;
    vertical-align: top;
  }

  .cd-headline.clip b {
    opacity: 0;
  }

  .cd-headline b.is-visible {
    opacity: 1;
  }
`;
