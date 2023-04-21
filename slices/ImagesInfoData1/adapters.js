import {
  GetImage,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    top_title: primary?.top_title,
    title: GetRichTextContent(primary?.title),
    content: GetParagraphsContent(primary?.content),
    features: items
      .filter(item => {
        return !!(item.feature_icon || item.feature_name);
      })
      .map((item, idx) => {
        return { id: `feature-${idx}`, ...item };
      }),
    image1: GetImage(primary.image_1),
    image2: GetImage(primary.image_2),
    image3: GetImage(primary.image_3),
  };
};
