import {
  GetImage,
  GetLink,
  GetRichTextContent,
} from 'src/utils/adapters/prismic';

export const getSliceData = slice => {
  const { primary, items, variation } = slice;

  const title = GetRichTextContent(primary?.title);
  const content = primary?.content?.map((item, idx) => ({
    id: `content-item-${idx}`,
    text: GetRichTextContent([item]),
  }));
  const links = items.map((linkObj, idx) => ({
    id: `link-img-${idx}`,
    img_light: GetImage(linkObj?.light_theme_image),
    img_dark: GetImage(linkObj?.dark_theme_image),
    link: GetLink({
      link_name: linkObj?.link_name,
      link_url: linkObj?.link_url,
    }),
    hideOnMobile: linkObj.hideOnMobile,
  }));

  const Variations = {
    default: {
      top_title: GetRichTextContent(primary?.top_title),
      title,
      content,
      links: links.filter(
        item => item.img_dark && item.img_light && item.link?.valid
      ),
    },
    iconsLinkIconsOnly: {
      center: primary?.center_items,
      links: links.filter(
        item => item.img_dark && item.img_light && item.link?.valid
      ),
    },
    topContent: {
      title,
      content,
      links: links.filter(item => item.img_dark || item.link?.valid),
      background_details: primary?.background_details,
    },
  };

  return Variations[variation];
};
