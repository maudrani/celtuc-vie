import React, { createContext, useReducer } from 'react';
import {
  getMainThemeContextData,
  getVariantsThemeContextData,
} from './adapters';
import { THEME_NAMES } from './collections';
import Theme from '@/layouts/Theme';

const initialState = {
  styles: {},
  theme: {
    ...getMainThemeContextData({ themeName: THEME_NAMES.default }),
    ...getVariantsThemeContextData({ useSkin: false, mobileappstyle: false }),
  },
};

export { THEME_NAMES };

export const stylesActionTypes = {
  CHANGE_THEME: 'CHANGE_THEME',
  TOGGLE_MOBILE_APP_STYLE: 'TOGGLE_MOBILE_APP_STYLE',
  TOGGLE_SKIN_STYLE: 'TOGGLE_SKIN_STYLE',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case stylesActionTypes.CHANGE_THEME: {
      const theme = {
        ...state.theme,
        ...getMainThemeContextData({
          themeName: THEME_NAMES[action.themeName],
        }),
      };

      return {
        ...state,
        theme,
      };
    }

    case stylesActionTypes.TOGGLE_MOBILE_APP_STYLE: {
      const theme = {
        ...state.theme,
        ...getVariantsThemeContextData({
          mobileappstyle: action.toggle,
        }),
      };

      return {
        ...state,
        theme,
      };
    }

    case stylesActionTypes.TOGGLE_SKIN_STYLE: {
      const theme = {
        ...state.theme,
        ...getVariantsThemeContextData({
          useSkin: action.toggle,
        }),
      };

      return {
        ...state,
        theme,
      };
    }

    default:
      return state;
  }
};

export const StylesContext = createContext();

export const StylesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    changeTheme: themeName => {
      dispatch({
        type: stylesActionTypes.CHANGE_THEME,
        themeName,
      });
    },
    toggleMobileAppStyle: toggle => {
      dispatch({
        type: stylesActionTypes.TOGGLE_MOBILE_APP_STYLE,
        toggle,
      });
    },
    toggleSkinStyle: toggle => {
      dispatch({
        type: stylesActionTypes.TOGGLE_SKIN_STYLE,
        toggle,
      });
    },
  };

  return (
    <StylesContext.Provider value={value}>
      <Theme>{children}</Theme>
    </StylesContext.Provider>
  );
};
