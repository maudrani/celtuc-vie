import {
  GetImage,
  GetLink,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary } = slice;

  return {
    top_title: GetRichTextContent(primary?.top_title),
    title: GetRichTextContent(primary?.title),
    content: GetParagraphsContent(primary?.content),
    link: GetLink({
      link_name: primary?.link_name,
      link_url: primary?.link_url,
    }),
    image1: GetImage(primary?.image_1),
    image2: GetImage(primary?.image_2),
    caption_title: GetRichTextContent(primary?.caption_title),
    caption_description: GetRichTextContent(primary?.caption_description),
    separator: primary?.separator,
  };
};
