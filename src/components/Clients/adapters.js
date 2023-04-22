import { isEmpty } from 'lodash';

export const getDataFromProps = ({ props }) => {
  const { top_title, title, content, links } = props;

  const hasLeftCol = !!(top_title || title || (content && !isEmpty(content)));
  const hasRightCol = !!(links && !isEmpty(links));

  return {
    top_title,
    title,
    content,
    links,
    hasLeftCol,
    hasRightCol,
  };
};
