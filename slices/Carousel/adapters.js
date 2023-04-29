import {
  GetImage,
  GetLink,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items, variation } = slice;

  const slides = items?.map((item, idx) => ({
    id: `item-slide-${idx}`,
    tag: item?.tag,
    top_title: GetRichTextContent(item?.top_title),
    title: GetRichTextContent(item?.title),
    link: GetLink({
      link_name: item?.title,
      link_url: item?.link_url,
    }),
    image: GetImage(item['image']),
  }));

  const Variations = {
    default: slides,
    withTitle: {
      top_title: GetRichTextContent(primary?.top_title),
      title: GetRichTextContent(primary?.title),
      slides,
    },
  };

  return Variations[variation];
};
