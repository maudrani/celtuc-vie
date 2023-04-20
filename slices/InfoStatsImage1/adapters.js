import { GetImage, GetRichTextContent } from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;
  const validLink = primary?.link_name && primary?.link_url?.url;

  return {
    top_title: GetRichTextContent(primary?.top_title),
    title: GetRichTextContent(primary?.title),
    content: primary?.content.filter(item => item.text).map(item => item.text),
    link: {
      name: primary?.link_name,
      url: primary?.link_url.url,
      valid: validLink,
    },
    image: GetImage(primary.image),
    stats: items.map((item, idx) => ({ id: idx, ...item })),
  };
};
