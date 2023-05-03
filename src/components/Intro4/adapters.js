export const getDataFromProps = ({ props }) => {
  const { content, link, particles, details, height } = props;

  const hasContent = !!content || link?.valid

  return {
    content,
    link,
    particles,
    details,
    hasContent,
    height
  };
};
