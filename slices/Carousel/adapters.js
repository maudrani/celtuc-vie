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
    image: GetImage(item.image),
  }));

  const Variations = {
    default: { slides },
    withTitle: {
      top_title: GetRichTextContent(primary?.top_title),
      title: GetRichTextContent(primary?.title),
      slides,
    },
    centerCaption: { slides },
    leftOrientedCard: {
      top_title: GetRichTextContent(primary?.top_title),
      title: GetRichTextContent(primary?.title),
      background_image: GetImage(primary?.background_image),
      slides: items?.map((item, idx) => ({
        id: `item-slide-${idx}`,
        content: GetRichTextContent(item?.content),
        left_title: GetRichTextContent(item?.left_title),
        left_content: GetRichTextContent(item?.left_content),
        image: GetImage(item.image),
      })),
    },
  };

  return Variations[variation];
};
