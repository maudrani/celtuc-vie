import { css } from 'styled-components';

export const cursor = css`
  body {
    cursor: none;
  }
  .mouse-cursor {
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: none;
    border-radius: 50%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    visibility: hidden;
  }
  .cursor-inner {
    margin-left: 2px;
    margin-top: 2px;
    width: 6px;
    height: 6px;
    z-index: 10000001;
    background-color: ${({theme}) => theme.colors.cursor};
    -webkit-transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
      margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
      margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
      margin 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  .cursor-inner.cursor-hover {
    margin-left: -40px;
    margin-top: -40px;
    width: 80px;
    height: 80px;
    background-color: ${({theme}) => theme.colors.cursor};
    opacity: 0.3;
  }
  .cursor-outer {
    margin-left: -15px;
    margin-top: -15px;
    width: 40px;
    height: 40px;
    border: 1px solid ${({theme}) => theme.colors.cursor};
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 10000000;
    opacity: 0.5;
    -webkit-transition: all 0.08s ease-out;
    -o-transition: all 0.08s ease-out;
    transition: all 0.08s ease-out;
  }
  .cursor-outer.cursor-hover {
    opacity: 0;
  }
`;
