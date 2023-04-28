import styled from 'styled-components';

export const SliderContainer = styled.header`
  .swiper-container {
    padding-bottom: 0 !important;
  }
`;

export const PanelBottom = styled.div`
  bottom: 50px !important;
  z-index: 2;

  .swiper-pagination {
    bottom: 10px !important;
  }
`;

export const SlideContainer = styled.div`
  &.bg-img::before {
    transition: ${({ isOnView }) => (isOnView ? '2s' : '0.8s')};
  }
`;

export const ParticlesContainer = styled.div`
  z-index: 1;

  * {
    pointer-events: none !important;
  }
`;
