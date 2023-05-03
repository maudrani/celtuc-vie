import { isArray, isEmpty } from 'lodash';
import { GetCurrentImg } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { slides, background_image, top_title, title } = props;

  const parsedSlides = isArray(slides) && !isEmpty(slides) && slides;

  const disableExpand = parsedSlides && parsedSlides.length < 3;
  const backImg = GetCurrentImg({
    img: background_image,
    windowsWidth,
  });

  const hasHeading = !!top_title || !!title;

  return {
    top_title,
    title,
    background_image: !isEmpty(backImg) && backImg,
    slides: parsedSlides && parsedSlides.filter(slide => !!slide.content),
    disableExpand,
    hasHeading,
  };
};
