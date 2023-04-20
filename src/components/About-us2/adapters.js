import { isArray, isEmpty } from 'lodash';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, title, content, link, image1, image2, image3, features } =
    props;

  const hasRightCol = !!(
    top_title ||
    title ||
    (isArray(content) && !isEmpty(content)) ||
    (isArray(features) && !isEmpty(features))
  );
  

  const getCurrentImg = img => {
    const currentImg =
      windowsWidth <= 767
        ? img?.mobile
        : windowsWidth <= 990
        ? img?.tablet
        : hasRightCol
        ? img?.desktop
        : img?.main;

    return currentImg;
  };

  const hasLeftCol = !!(!!(image1 || image2 || image3) && windowsWidth);

  return {
    top_title,
    title,
    content,
    link,
    image1: getCurrentImg(image1),
    image2: getCurrentImg(image2),
    image3: getCurrentImg(image3),
    features,
    hasRightCol,
    hasLeftCol,
  };
};
