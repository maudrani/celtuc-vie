import { isEmpty } from 'lodash';
import { GetCurrentImgIfColumn } from 'src/utils/adapters/components';
import { GetParsedVideoData } from 'src/utils/adapters/prismic';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const {
    title,
    subtitle,
    video,

    image,
    caption_title,
    caption_description,
  } = props;

  const hasLeftCol = !!(!!image && windowsWidth);

  const hasCaption = !!(caption_title || !isEmpty(caption_description));
  const hasRightCol = !!(title || subtitle || !isEmpty(video) || hasCaption);

  return {
    title,
    subtitle,
    video: GetParsedVideoData({ video }),
    caption_title,
    caption_description,

    image: GetCurrentImgIfColumn({
      img: image,
      windowsWidth,
      breakpoints: { mobile: 570 },
      hasCol: hasRightCol,
    }),

    hasRightCol,
    hasLeftCol,
    hasCaption,
  };
};
