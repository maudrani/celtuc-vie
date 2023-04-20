import { isEmpty } from 'lodash';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, title, content, link, image, stats } = props;

  const hasLeftCol = !!(top_title || title || !isEmpty(content) || link?.valid);

  const currentImage =
    windowsWidth <= 570
      ? image?.mobile
      : windowsWidth <= 990
      ? image?.tablet
      : hasLeftCol
      ? image?.desktop
      : image?.main;

  const hasRightCol = !!(
    (currentImage && windowsWidth) ||
    (stats && !isEmpty(stats))
  );

  return {
    top_title,
    title,
    content,
    link,
    image: currentImage,
    stats,
    hasRightCol,
    hasLeftCol,
  };
};
