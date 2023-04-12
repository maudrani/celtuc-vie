import { colors } from 'brand/styles/colors';

export const dark = {
  colors: {
    ...colors,
    font_color_1: colors.white,
    font_color_2: colors.aluminium,
    font_color_3: colors.cod_gray,
    background_1: colors.woodsmoke,
    background_2: colors.woodsmoke,
  },
};

export const light = {
  colors: {
    ...colors,
    font_color_1: colors.cod_gray,
    font_color_2: colors.gray,
    font_color_3: colors.white,
    background_1: colors.white,
    background_2: colors.wild_sand,
  },
};

export const themes = {
  dark,
  light,
};
