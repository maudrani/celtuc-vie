import { THEME_NAMES } from './collections';

export const getMainThemeContextData = ({ themeName }) => {
  const isDark = themeName === THEME_NAMES.dark;

  return {
    isLight: !isDark,
    isDark: isDark,
    themeName: THEME_NAMES[themeName],
  };
};

export const getVariantsThemeContextData = ({ mobileappstyle, useSkin }) => {
  return {
    mobileappstyle,
    useSkin,
  };
};
