import { isArray, isEmpty } from 'lodash';
import { GetCurrentImg } from 'src/utils/adapters/components';
import { GetParsedVideoData } from 'src/utils/adapters/prismic';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const { video, image, captions } = props;

  const hasImage = !!(!!image && windowsWidth);
  const hasCaptions = isArray(captions) || !isEmpty(caption_description);

  return {
    video: GetParsedVideoData({ video }),

    image: GetCurrentImg({
      img: image,
      windowsWidth,
      breakpoints: { mobile: 570 },
    }),

    captions,
    hasImage,
    hasCaptions,
  };
};
