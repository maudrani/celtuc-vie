import React, { useContext } from 'react';
import Head from 'next/head';
import NavbarMobileApp from '@/components/Navbar-mobile-app/navbar-mobile-app';
import PricePackages2 from '@/components/Price-packages2/price-packages2';
import Footer2 from '@/components/Footer2/footer2';
import Faq from '@/components/Faq/faq';
import PageHeader2 from '@/components/Page-header2/page-header2';
import DownloadApp from '@/components/Download-app/download-app';
import { StylesContext } from '@/contexts/styles';

const MobileAppPricingPlanDark = () => {
  const { toggleMobileAppStyle } = useContext(StylesContext);

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
          title="Pricing Package"
          links={[
            { id: 1, name: 'Home', url: '/' },
            {
              id: 2,
              name: 'Pricing Package',
              url: '/mobile-app/pricing-plan',
            },
          ]}
        />
        <PricePackages2 />
        <DownloadApp />
        <Faq />
        <Footer2 />
      </>
    </>
  );
};

export default MobileAppPricingPlanDark;
