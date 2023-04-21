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
    title: GetRichTextContent(primary?.title),
    content: GetParagraphsContent(primary?.content),
    link: GetLink({
      link_name: primary?.link_name,
      link_url: primary?.link_url,
    }),
    image: GetImage(primary.image),
    stats: items.map((item, idx) => ({ id: idx, ...item })),
  };
};
