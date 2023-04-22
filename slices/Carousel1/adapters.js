import {
  GetImage,
  GetLink,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    slides: items?.map((item, idx) => ({
      id: `item-slide-${idx}`,
      tag: item?.tag,
      top_title: GetRichTextContent(item?.top_title),
      title: GetRichTextContent(item?.title),
      link: GetLink({
        link_name: item?.title,
        link_url: item?.link_url,
      }),
      image: GetImage(item?.image),
    })),
  };
};
