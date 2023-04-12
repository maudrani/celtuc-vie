import { css } from 'styled-components';

export const text_images = css`
  .splitting.animated .char {
    -webkit-animation: fadeInUp 0.4s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeInUp 0.4s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(30ms * var(--char-index));
    animation-delay: calc(30ms * var(--char-index));
  }

  .splitting .whitespace {
    width: 5px;
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .splitting.txt.animated .char {
    -webkit-animation: fadeIn 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    animation: fadeIn 0.3s cubic-bezier(0.3, 0, 0.7, 1) both;
    -webkit-animation-delay: calc(10ms * var(--char-index));
    animation-delay: calc(10ms * var(--char-index));
  }

  .splitting.txt .whitespace {
    width: 5px;
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .imago {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    -webkit-transition: all 0.8s;
    -o-transition: all 0.8s;
    transition: all 0.8s;
    -webkit-transition-delay: 0.3s;
    -o-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .imago.animated {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;
