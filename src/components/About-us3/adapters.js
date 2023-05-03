import { isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const {
    title,
    content,
    link,
    image1,
    image2,
    caption_title,
    caption_description,
    separator
  } = props;

  const hasRightCol = !!(title || !isEmpty(content) || link?.valid);
  const hasImages = !!(!!(image1 || image2) && windowsWidth);
  const hasCaption = !!(caption_title || caption_description);
  const hasLeftCol = hasImages || hasCaption;

  

  return {
    title,
    content,
    link,
    image1: GetCurrentImgIfColumn({
      img: image1,
      windowsWidth,
      breakpoints: { mobile: 767 },
      hasCol: hasRightCol,
    }),
    image2: GetCurrentImgIfColumn({
      img: image2,
      windowsWidth,
      breakpoints: { mobile: 767 },
      hasCol: hasRightCol,
    }),
    caption_description,
    caption_title,
    hasRightCol,
    hasLeftCol,
    hasCaption,
    separator
  };
};
