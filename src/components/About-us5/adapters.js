import { isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { title, subtitle, content, image, stats } = props;

  const hasLeftCol = !!(!!image && windowsWidth);
  const hasRightCol = !!(
    title ||
    subtitle ||
    !isEmpty(content) ||
    !isEmpty(stats)
  );

  return {
    title,
    subtitle,
    content,
    image: GetCurrentImgIfColumn({
      img: image,
      windowsWidth,
      breakpoints: { mobile: 570 },
      hasCol: hasRightCol,
    }),
    stats,
    hasRightCol,
    hasLeftCol,
  };
};
