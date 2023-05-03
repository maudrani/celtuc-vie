import {
  GetImage,
  GetLink,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items, variation } = slice;

  const link = GetLink({
    link_name: primary?.link_name,
    link_url: primary?.link_url,
  });

  const Variations = {
    default: {
      top_title: GetRichTextContent(primary?.top_title),
      text: items.map((item, idx) => ({ id: `text-item-${idx}`, ...item })),
      link,
      background_image: GetImage(primary?.background_image),
    },
    titleWithParticles: {
      link,
      content: GetRichTextContent(primary?.content),
      particles: primary?.particles,
      details: primary?.details,
      height: primary?.height
    },
  };

  return Variations[variation];
};
