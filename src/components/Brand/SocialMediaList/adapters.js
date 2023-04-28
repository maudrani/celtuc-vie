import { isArray, isEmpty } from 'lodash';

export const GetDataList = ({ brand }) => {
  if (!brand || !isArray(brand.social_media)) return;

  return brand.social_media
    .filter(media => !!media.name || !isEmpty(media.link?.url))
    .map((item, idx) => ({ ...item, id: `social-media-${idx}` }));
};
