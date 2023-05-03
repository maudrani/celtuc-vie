import styled from 'styled-components';

export const Container = styled.header`
  min-height: ${({ height }) => height}vh;
  background-color: ${({ theme }) => theme.colors.cod_gray};

  .gradient-circle {
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.big_stone},
      ${({ theme }) => theme.colors.big_stone}
    );
    opacity: 0.2;

    &.two {
      background-image: linear-gradient(
        45deg,
        ${({ theme }) => theme.colors.big_stone},
        ${({ theme }) => theme.colors.big_stone}
      );
      opacity: 0.2;
    }
  }
`;

export const Title = styled.span`
  .color-font {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white},
      ${({ theme }) => theme.colors.nepal},
      ${({ theme }) => theme.colors.big_stone}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
