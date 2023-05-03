import { THEME_NAMES } from '@/contexts/styles';
import { colors } from 'brand/styles/colors';

export const dark = {
  colors: {
    ...colors,
    font_color_1: colors.white,
    font_color_2: colors.aluminium,
    font_color_3: colors.cod_gray,
    font_natural_1: colors.ebony_clay,
    font_natural_2: colors.big_stone,
    background_1: colors.mirage,
    background_2: colors.woodsmoke,

    //cursor
    cursor: colors.white,
  },
  name: THEME_NAMES.dark,
};

export const light = {
  colors: {
    ...colors,
    font_color_1: colors.cod_gray,
    font_color_2: colors.gray,
    font_color_3: colors.white,
    font_natural_1: colors.nepal,
    font_natural_2: colors.big_stone,
    background_1: colors.white,
    background_2: colors.wild_sand,

    //cursor
    cursor: colors.cod_gray,
  },
  name: THEME_NAMES.light,
};

export const themes = {
  dark,
  light,
};
