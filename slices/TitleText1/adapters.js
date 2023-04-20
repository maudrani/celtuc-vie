import { GetRichTextContent } from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary } = slice;

  return {
    title: GetRichTextContent(primary?.title) || null,
    content: primary?.content.map(item => item.text),
  };
};
