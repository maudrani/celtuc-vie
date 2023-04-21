import { isEmpty } from 'lodash';

export const GetCurrentImgIfColumn = ({
  img,
  breakpoints = {},
  hasCol,
  windowsWidth,
}) => {
  if (isEmpty(img)) return;

  const { mobile, tablet } = breakpoints;

  const currentImg =
    windowsWidth <= (mobile || 570)
      ? img?.mobile
      : windowsWidth <= (tablet || 990)
      ? img?.tablet
      : hasCol
      ? img?.desktop
      : img?.main;

  return currentImg;
};
