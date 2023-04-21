import { isArray, isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const {
    top_title,
    title,
    content,
    link,
    background_image,
    caption_title,
    caption_description,
  } = props;

  const hasRightCol = !!(
    top_title ||
    title ||
    (isArray(content) && !isEmpty(content)) ||
    link?.valid
  );

  const hasLeftCol = !!(
    (!!background_image && windowsWidth) ||
    caption_title ||
    !isEmpty(caption_description)
  );

  return {
    top_title,
    title,
    content,
    link,
    background_image: GetCurrentImgIfColumn({
      img: background_image,
      windowsWidth,
      breakpoints: { mobile: 767 },
      hasCol: hasRightCol,
    }),
    caption_title,
    caption_description,
    hasRightCol,
    hasLeftCol,
  };
};
