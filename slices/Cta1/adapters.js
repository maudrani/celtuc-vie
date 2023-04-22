import {
  GetImage,
  GetLink,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    top_title: GetRichTextContent(primary?.top_title),
    text: items.map((item, idx) => ({ id: `text-item-${idx}`, ...item })),
    link: GetLink({
      link_name: primary?.link_name,
      link_url: primary?.link_url,
    }),
    background_image: GetImage(primary?.background_image),
  };
};
