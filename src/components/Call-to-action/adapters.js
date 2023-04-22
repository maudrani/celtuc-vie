import { isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { top_title, text, link, background_image } = props;

  const hasLeftCol = !!(top_title || (text && !isEmpty(text)));
  const hasRightCol = !!link?.valid;

  return {
    top_title,
    text,
    link,
    background_image: GetCurrentImgIfColumn({
      img: background_image,
      windowsWidth,
    }),
    hasRightCol,
    hasLeftCol,
  };
};
