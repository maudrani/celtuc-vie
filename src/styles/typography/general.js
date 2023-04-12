import { css } from 'styled-components';

export const general = css`
  span,
  a,
  a:hover {
    display: inline-block;
    color: inherit;
  }

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 35px;
  }

  h4 {
    font-size: 30px;
  }

  h5 {
    font-size: 25px;
  }

  h6 {
    font-size: 18px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.font_color_2};
    font-size: 16px;
    font-weight: 300;
    line-height: 2;
    margin: 0;
  }

  a,
  span {
    display: inline-block;
  }

  a:hover,
  span:hover {
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
  }

  .custom-font {
    font-family: 'Poppins', sans-serif;
  }

  .color-font {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .back-color {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
  }

  .line {
    position: absolute;
    height: 1px;
    width: 65%;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(${({ theme }) => theme.colors.bright_turquoise}),
      color-stop(${({ theme }) => theme.colors.lavender}),
      to(${({ theme }) => theme.colors.carnation})
    );
    background: -webkit-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: -o-linear-gradient(
      left,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.bright_turquoise},
      ${({ theme }) => theme.colors.lavender},
      ${({ theme }) => theme.colors.carnation}
    );
  }

  .line.top {
    top: 0;
  }

  .line.bottom {
    bottom: 0;
  }

  .line.left {
    left: 0;
  }

  .line.right {
    right: 0;
  }

  .line-v {
    position: absolute;
    height: 80px;
    width: 1px;
    background: ${({ theme }) => theme.colors.sorrell_brown};
    left: 50%;
    opacity: 0.3;
  }

  .line-v.top {
    top: -30px;
  }

  .line-v.bottom {
    bottom: -30px;
  }
`;
