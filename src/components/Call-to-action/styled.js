import styled from 'styled-components';

export const Container = styled.section`
  .content h6 span {
    color: ${({ theme }) => theme.colors.font_color_1};
  }

  .back-color {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.mirage},
      ${({ theme }) => theme.colors.big_stone},
      ${({ theme }) => theme.colors.ebony_clay}
    );
  }
`;
