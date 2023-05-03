import { css } from 'styled-components';

export const paddings = css`
  .section-padding-sm {
    padding: 60px 0;

    @media (max-width: 1024px) {
      padding: 30px 0;
    }
  }

  .section-padding-md {
    padding: 110px 0;

    @media (max-width: 1024px) {
      padding: 60px 0;
    }
  }

  .section-padding-lg {
    padding: 160px 0;

    @media (max-width: 1024px) {
      padding: 88px 0;
    }
  }
`;
