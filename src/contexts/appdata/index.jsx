import React, { createContext, useReducer } from 'react';

export const AppDataContext = createContext();

const initialState = {
  brand: {
    light_logo: '/img/logo-light.png',
    dark_logo: '/img/logo-dark.png',
  },

  showLoading: true,
};

export const appDataActionTypes = {
  GET_BRAND_DATA: 'GET_BRAND_DATA',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case appDataActionTypes.GET_BRAND_DATA: {
      const { brandData } = action;

      const brand = {
        brand_name: brandData.brand_name,
        addresses: brandData.addresses,
        mails: brandData.mails,
        phone_number: brandData.phone_number,
        dark_logo: brandData.logo.url,
        light_logo: brandData.logo_negative.url,
        social_media: brandData.social_media,
      };

      return {
        ...state,
        brand,
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
  };

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
