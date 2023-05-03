import { isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, title, content, link, image, stats, details } = props;

  const hasLeftCol = !!(top_title || title || !isEmpty(content) || link?.valid);

  const hasRightCol = !!((image && windowsWidth) || (stats && !isEmpty(stats)));

  return {
    top_title,
    title,
    content,
    link,
    image: GetCurrentImgIfColumn({
      img: image,
      hasCol: hasLeftCol,
      windowsWidth,
    }),
    stats,
    hasRightCol,
    hasLeftCol,
    details
  };
};
