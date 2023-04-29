import {
  GetHeadingsContent,
  GetImage,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  const captions = items.map((cap, idx) => {
    const caption = {
      id: `caption-${idx}`,
      title: GetHeadingsContent(GetRichTextContent(cap.caption_title)),
      description: GetParagraphsContent(cap.caption_description),
    };

    return caption;
  });

  return {
    video: primary?.video,
    image: GetImage(primary?.video_thumbnail),
    captions: captions.filter(cap => !!cap.title || !!cap.description),
  };
};
