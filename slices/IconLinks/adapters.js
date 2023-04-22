import {
  GetImage,
  GetLink,
  GetParagraphsContent,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items } = slice;

  return {
    top_title: GetRichTextContent(primary?.top_title),
    title: GetRichTextContent(primary?.title),
    content: primary?.content.map((item, idx) => ({
      id: `content-item-${idx}`,
      text: GetRichTextContent([item])
    })),

    links: items.map((linkObj, idx) => ({
      id: `link-img-${idx}`,
      img_light: GetImage(linkObj?.light_theme_image),
      img_dark: GetImage(linkObj?.dark_theme_image),
      link: GetLink({
        link_name: linkObj?.link_name,
        link_url: linkObj?.link_url,
      }),
    })),
  };
};
