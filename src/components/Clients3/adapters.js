import { isArray, isEmpty } from 'lodash';

export const getDataFromProps = ({ props }) => {
  const { title, content, links, background_details } = props;

  const topRow = !!(title || (isArray(content) && !isEmpty(content)));
  const bottomRow = isArray(links) && !isEmpty(links);

  return {
    title,
    content,
    links,
    background_details,
    topRow,
    bottomRow,
  };
};
