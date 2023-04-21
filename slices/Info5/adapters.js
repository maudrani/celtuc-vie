import {
  GetImage,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    title: GetRichTextContent(primary?.title),
    subtitle: GetRichTextContent(primary?.subtitle),
    content: GetParagraphsContent(primary?.content),
    image: GetImage(primary?.image),
    stats: items
      .filter(
        item =>
          !!(
            String(item.progress_percentage) &&
            GetRichTextContent(item?.progress_title)
          )
      )
      .map((item, idx) => ({
        id: `progress-${idx}`,
        percentage: item.progress_percentage,
        title: GetRichTextContent(item?.progress_title),
      })),
  };
};
