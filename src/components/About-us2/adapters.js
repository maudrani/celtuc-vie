import { isArray, isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, title, content, link, image1, image2, image3, features } =
    props;

  const hasRightCol = !!(
    top_title ||
    title ||
    (isArray(content) && !isEmpty(content)) ||
    (isArray(features) && !isEmpty(features))
  );

  const hasLeftCol = !!(!!(image1 || image2 || image3) && windowsWidth);
  const imgData = {
    windowsWidth,
    breakpoints: { mobile: 767 },
    hasCol: hasRightCol,
  };

  return {
    top_title,
    title,
    content,
    link,
    image1: GetCurrentImgIfColumn({
      img: image1,
      ...imgData,
    }),
    image2: GetCurrentImgIfColumn({
      img: image2,
      ...imgData,
    }),
    image3: GetCurrentImgIfColumn({
      img: image3,
      ...imgData,
    }),
    features,
    hasRightCol,
    hasLeftCol,
  };
};
