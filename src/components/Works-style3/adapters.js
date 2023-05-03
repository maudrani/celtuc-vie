import { isArray, isEmpty } from 'lodash';

export const GetDataFromProps = ({ props, windowsWidth }) => {
  const { show_filters, items } = props;

  const parsedItems = isArray(items) && !isEmpty(items) && items;

  return { show_filters, items: parsedItems };
};
