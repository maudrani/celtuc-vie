import {
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary } = slice;

  return {
    title: GetRichTextContent(primary?.title),
    content: GetParagraphsContent(primary?.content),
  };
};
