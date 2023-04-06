import React, { useContext } from 'react';
import Head from 'next/head';
import { StylesContext } from '@/contexts/styles';

const Theme = ({ children }) => {
  const { theme } = useContext(StylesContext);
  const { themeName, useSkin, mobileappstyle } = theme;

  React.useEffect(() => {
    window.theme = themeName;
  }, [themeName]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href={`/css/${themeName}.css`} />
        {useSkin ? (
          <link href={`/css/arch-skin-${themeName}.css`} rel="stylesheet" />
        ) : (
          ''
        )}
        {mobileappstyle ? (
          <link href={`/css/mobile-app-${themeName}.css`} rel="stylesheet" />
        ) : (
          ''
        )}
      </Head>
      {children}
    </>
  );
};

export default Theme;
