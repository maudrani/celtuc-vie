import React, { createContext, useReducer } from 'react';
import { ParseBrandData, ParseNavigationData } from './adapters';
import mockedNav from './navigation-mocked.json'

export const AppDataContext = createContext();

const initialState = {
  brand: {
    light_logo: '/img/logo-light.png',
    dark_logo: '/img/logo-dark.png',
  },

  navigation: mockedNav,
  showLoading: false,
};

export const appDataActionTypes = {
  GET_BRAND_DATA: 'GET_BRAND_DATA',
  GET_NAVIGATION_DATA: 'GET_NAVIGATION_DATA',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case appDataActionTypes.GET_BRAND_DATA: {
      const { brandData } = action;

      return {
        ...state,
        brand: ParseBrandData(brandData),
      };
    }

    case appDataActionTypes.GET_NAVIGATION_DATA: {
      const { navigationData } = action;

      return {
        ...state,
        navigation: ParseNavigationData(navigationData),
      };
    }

    default:
      return state;
  }
};

export const AppData = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    getBrandData: brandData => {
      dispatch({
        type: appDataActionTypes.GET_BRAND_DATA,
        brandData,
      });
    },
    getNavigationData: navigationData => {
      dispatch({
        type: appDataActionTypes.GET_NAVIGATION_DATA,
        navigationData,
      });
    },
  };

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
