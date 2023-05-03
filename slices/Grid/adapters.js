import {
  GetImage,
  GetLink,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items, variation } = slice;

  const parsedItems = items?.map(item => ({
    link: GetLink({
      link_name: GetRichTextContent(item?.title),
      link_url: item?.link_url,
    }),
    title: GetRichTextContent(item?.title),
    categories: item.categories?.split(','),
    image: GetImage(item?.image, ['50', '25', '15']),
    size: item.size,
  }));

  const Variations = {
    default: {
      show_filters: primary.show_filters,
      items: parsedItems,
    },
  };

  return Variations[variation];
};
