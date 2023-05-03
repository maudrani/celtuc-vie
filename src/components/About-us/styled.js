import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
`;

export const Headings = styled.div`
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

  h6 {
    color: ${({ theme }) => theme.colors.font_color_2};
  }
`;
