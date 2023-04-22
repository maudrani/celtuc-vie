import { isEmpty } from 'lodash';

export const GetCurrentImgIfColumn = ({
  img,
  breakpoints = {},
  hasCol,
  windowsWidth,
}) => {
  if (isEmpty(img)) return;

  const { mobile = 570, tablet = 990, desktop = 1440 } = breakpoints;

  const imageSize =
    windowsWidth <= mobile
      ? 'mobile'
      : windowsWidth <= tablet
      ? 'tablet'
      : windowsWidth <= desktop || hasCol
      ? 'desktop'
      : 'main';

  return img[imageSize] || img.main;
};

export const GetCurrentImg = ({ img, breakpoints = {}, windowsWidth }) => {
  if (isEmpty(img)) return;

  const { mobile = 570, tablet = 990, desktop = 1440 } = breakpoints;

  const imageSize =
    windowsWidth <= mobile
      ? 'mobile'
      : windowsWidth <= tablet
      ? 'tablet'
      : windowsWidth <= desktop
      ? 'desktop'
      : 'main';

  return img[imageSize] || img.main;
};
