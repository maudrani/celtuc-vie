import styled from 'styled-components';

export const Container = styled.section`
  .color-font {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.font_color_1},
      ${({ theme }) => theme.colors.font_color_2},
      ${({ theme }) => theme.colors.font_natural_2}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
