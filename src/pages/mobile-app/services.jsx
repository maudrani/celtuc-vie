import React, { useContext } from 'react';
import Head from 'next/head';
import NavbarMobileApp from '@/components/Navbar-mobile-app/navbar-mobile-app';
import Services8 from '@/components/Services8/services8';
import PricePackages from '@/components/Price-packages/price-packages';
import Footer2 from '@/components/Footer2/footer2';
import Statistics from '@/components/Statistics/statistics';
import Faq from '@/components/Faq/faq';
import PageHeader2 from '@/components/Page-header2/page-header2';
import { StylesContext } from '@/contexts/styles';

const MobileAppServicesDark = () => {
  const { toggleMobileAppStyle, theme } = useContext(StylesContext);

  React.useEffect(() => {
    toggleMobileAppStyle(true);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <NavbarMobileApp />
        <PageHeader2
          title="Popular Services"
          links={[
            { id: 1, name: 'Home', url: '/' },
            { id: 2, name: 'Services', url: '/mobile-app/services' },
          ]}
        />
        <Services8 />
        <Statistics LightTheme={theme.isLight} />
        <PricePackages bgGray />
        <Faq />
        <Footer2 />
      </>
    </>
  );
};

export default MobileAppServicesDark;
