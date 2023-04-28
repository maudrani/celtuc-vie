import { isArray } from 'lodash';

export const GetDataList = ({ brand }) => {
  if (!brand || !isArray(brand.addresses)) return;

  return brand.addresses
    .filter(phone => !!phone.address)
    .map((item, idx) => ({ ...item, id: `address-${idx}` }));
};
