import css from 'styled-jsx/css';

export const start_overlay = css`
  [data-overlay-dark],
  [data-overlay-light] {
    position: relative;
  }

  [data-overlay-dark] .container,
  [data-overlay-light] .container {
    position: relative;
    z-index: 2;
  }

  [data-overlay-dark]:before,
  [data-overlay-light]:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  [data-overlay-dark]:before {
    background: ${({theme}) => theme.colors.woodsmoke};
  }

  [data-overlay-light]:before {
    background: ${({theme}) => theme.colors.white};
  }

  [data-overlay-dark] h1,
  [data-overlay-dark] h2,
  [data-overlay-dark] h3,
  [data-overlay-dark] h4,
  [data-overlay-dark] h5,
  [data-overlay-dark] h6,
  [data-overlay-dark] span,
  .bg-dark h1,
  .bg-dark h2,
  .bg-dark h3,
  .bg-dark h4,
  .bg-dark h5,
  .bg-dark h6,
  .bg-dark span,
  .bg-color h1,
  .bg-color h2,
  .bg-color h3,
  .bg-color h4,
  .bg-color h5,
  .bg-color h6,
  .bg-color span {
    color: ${({theme}) => theme.colors.white};
  }

  [data-overlay-dark] p,
  .bg-dark p,
  .bg-color p {
    color: ${({theme}) => theme.colors.swiss_coffee};
  }

  [data-overlay-dark='0']:before,
  [data-overlay-light='0']:before {
    opacity: 0;
  }

  [data-overlay-dark='1']:before,
  [data-overlay-light='1']:before {
    opacity: 0.1;
  }

  [data-overlay-dark='2']:before,
  [data-overlay-light='2']:before {
    opacity: 0.2;
  }

  [data-overlay-dark='3']:before,
  [data-overlay-light='3']:before {
    opacity: 0.3;
  }

  [data-overlay-dark='4']:before,
  [data-overlay-light='4']:before {
    opacity: 0.4;
  }

  [data-overlay-dark='5']:before,
  [data-overlay-light='5']:before {
    opacity: 0.5;
  }

  [data-overlay-dark='6']:before,
  [data-overlay-light='6']:before {
    opacity: 0.6;
  }

  [data-overlay-dark='7']:before,
  [data-overlay-light='7']:before {
    opacity: 0.7;
  }

  [data-overlay-dark='8']:before,
  [data-overlay-light='8']:before {
    opacity: 0.8;
  }

  [data-overlay-dark='9']:before,
  [data-overlay-light='9']:before,
  [data-overlay-color='9']:before {
    opacity: 0.9;
  }

  [data-overlay-dark='10']:before,
  [data-overlay-light='10']:before {
    opacity: 1;
  }
`;
