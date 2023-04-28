import { isArray } from 'lodash';

export const GetDataList = ({ brand }) => {
  if (!brand || !isArray(brand.phone_number)) return;

  return brand.phone_number
    .filter(phone => !!phone.phone_number)
    .map((num, idx) => ({ ...num, id: `phone-${idx}` }));
};
