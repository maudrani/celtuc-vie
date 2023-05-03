import styled from 'styled-components';

export const Container = styled.section`
  .line {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.font_natural_2},
      ${({ theme }) => theme.colors.font_color_2},
      ${({ theme }) => theme.colors.font_color_1}
    );
  }
`;
