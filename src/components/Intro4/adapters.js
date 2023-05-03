export const getDataFromProps = ({ props }) => {
  const { content, link, particles, details } = props;

  const hasContent = !!content || link?.valid

  return {
    content,
    link,
    particles,
    details,
    hasContent
  };
};
