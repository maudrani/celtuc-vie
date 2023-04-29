import { isArray, isEmpty } from 'lodash';
import { GetCurrentImg } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, title, slides } = props;

  const parsedSlides =
    isArray(slides) &&
    !isEmpty(slides) &&
    slides.map(slide => ({
      ...slide,
      image:
        slide.image &&
        GetCurrentImg({
          img: slide.image,
          windowsWidth,
        }),
    }));

  const hasTopRow = !!top_title || !!title;

  return {
    top_title,
    title,
    slides: parsedSlides.filter?.(slide => !!slide.image),
    hasTopRow,
    hasBottomRow: !!parsedSlides,
  };
};

export const ChangeSwiperStyles = e => {
  e.slides.forEach((slide, idx) => {
    if (idx === e.activeIndex) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0.2;
    }
  });
};
