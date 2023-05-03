import styled from 'styled-components';

export const Container = styled.section`
  .color-font {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white},
      ${({ theme }) => theme.colors.font_color_2},
      ${({ theme }) => theme.colors.font_color_2}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 1024px) {
      font-size: 30px;
    }
  }
`;
