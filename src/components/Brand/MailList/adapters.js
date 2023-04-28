import { isArray } from 'lodash';

export const GetDataList = ({ brand }) => {
  if (!brand || !isArray(brand.mails)) return;

  return brand.mails
    .filter(phone => !!phone.mail)
    .map((item, idx) => ({ ...item, id: `mail-${idx}` }));
};
