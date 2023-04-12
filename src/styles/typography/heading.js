import { css } from 'styled-components';

export const heading = css`
  .sec-head {
    position: relative;
    margin: 0 auto 80px;
  }

  .sec-head h6 {
    font-weight: 300;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 7px;
    margin-bottom: 10px;
  }

  .sec-head h3 {
    font-size: 48px;
    font-weight: 500;
  }

  .sec-head h2 {
    font-size: 70px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .sub-title {
    position: relative;
    margin-bottom: 20px;
  }

  .sub-title h6 {
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: inline-block;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({theme}) => theme.colors.bright_turquoise}),
      color-stop(${({theme}) => theme.colors.lavender}),
      to(${({theme}) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({theme}) => theme.colors.bright_turquoise},
      ${({theme}) => theme.colors.lavender},
      ${({theme}) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({theme}) => theme.colors.bright_turquoise},
      ${({theme}) => theme.colors.lavender},
      ${({theme}) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({theme}) => theme.colors.bright_turquoise},
      ${({theme}) => theme.colors.lavender},
      ${({theme}) => theme.colors.carnation}
    );
    padding: 7px 12px;
    border-radius: 10px;
  }

  .main-title {
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .extra-title {
    font-weight: 700;
  }

  .sm-title {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .smore {
    position: relative;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 7px;
    text-transform: uppercase;
    display: inline-block;
    padding: 5px;
  }

  .smore:after {
    content: '';
    width: 45%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    position: absolute;
    left: 0;
    top: 0;
  }

  .smore i {
    margin-left: 10px;
  }
`;
