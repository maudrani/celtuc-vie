export const getDataFromProps = ({ props }) => {
  const { center, links } = props;

  return {
    center,
    links,
  };
};
