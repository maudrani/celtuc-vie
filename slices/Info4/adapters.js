import {
  GetImage,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary } = slice;

  return {
    title: GetRichTextContent(primary?.title),
    subtitle: GetRichTextContent(primary?.subtitle),
    video: primary?.video,
    caption_title:  GetRichTextContent(primary?.caption_title),
    caption_description: GetParagraphsContent(primary?.caption_description),
    image: GetImage(primary?.image),
  };
};
