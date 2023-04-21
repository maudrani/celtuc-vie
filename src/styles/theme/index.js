import { THEME_NAMES } from '@/contexts/styles';
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
  name: THEME_NAMES.dark
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
  name: THEME_NAMES.light
};

export const themes = {
  dark,
  light,
};