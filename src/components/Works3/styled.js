import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.background_1};

  .sec-head {
    margin: 0 auto 60px;
  }

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

  .swiper-container {
    padding-bottom: 0;
  }
`;

export const SlideContainer = styled.div`
  img {
    height: 100%;
    object-fit: cover;
  }
`;
