import { isArray, isEmpty } from 'lodash';
import { GetCurrentImg } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { slides } = props;

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

  return {
    slides: parsedSlides,
  };
};
