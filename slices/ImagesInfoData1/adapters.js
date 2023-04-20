import { GetImage, GetRichTextContent } from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    top_title: primary?.top_title,
    title: GetRichTextContent(primary?.title),
    content: primary?.content.filter(item => item.text).map(item => item.text),
    features: items.map((item, idx) => ({ id: `feature-${idx}`, ...item })),
    image1: GetImage(primary.image_1),
    image2: GetImage(primary.image_2),
    image3: GetImage(primary.image_3),
  };
};
