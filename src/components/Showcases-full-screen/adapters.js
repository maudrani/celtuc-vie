import { isArray, isEmpty } from 'lodash';
import { GetCurrentImg } from 'src/utils/adapters/components';
import {
  GetImage,
  GetLink,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getDataFromProps = ({ props, windowsWidth }) => {
  const slides =
    isArray(props?.slides) &&
    !isEmpty(props.slides) &&
    props.slides.map((slide, idx) => ({
      id: `intro-slide-${idx}`,
      title_top: GetRichTextContent(slide.title_top),
      title_bottom: GetRichTextContent(slide.title_bottom),
      link: GetLink({
        link_name: GetParagraphsContent(slide?.link_name),
        link_url: slide?.link_url,
      }),
      image:
        slide?.image &&
        GetCurrentImg({
          img: GetImage(slide?.image),
          windowsWidth,
        }),
    }));

  return {
    slides: slides.filter(slide => {
      const hasTitles = !!(slide.title_top || slide.title_bottom);
      const hasImage = !!slide.image;

      return hasTitles && hasImage && slide.link.valid;
    }),
  };
};
