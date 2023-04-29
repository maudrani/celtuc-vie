import { isEmpty } from 'lodash';

export const ParseBrandData = brandData => ({
  brand_name: brandData.brand_name,
  addresses: brandData.addresses,
  mails: brandData.mails,
  phone_number: brandData.phone_number,
  dark_logo: brandData.logo.url,
  light_logo: brandData.logo_negative.url,
  social_media: brandData.social_media,
});

export const ParseNavigationData = navigationData => {
  const navigation = navigationData.slices
    .map(mainLink => {
      const { primary, items } = mainLink;

      const sublinks = items
        .map(link => ({
          name: link.sub_item_name,
          url: link.sub_item_link,
        }))
        .filter(link => !!link?.url?.url);

      return {
        name: primary.item_name,
        url: primary.item_link,
        links: sublinks,
      };
    })
    .filter(link => !!link.url?.url || !isEmpty(link.links));

  return navigation;
};
