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
    caption_title: GetRichTextContent(primary?.caption_title),
    caption_description: GetParagraphsContent(primary?.caption_description),
    background_image: GetImage(primary?.background_image),
  };
};
