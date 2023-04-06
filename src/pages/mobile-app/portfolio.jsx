import React, { useContext } from 'react';
import Head from 'next/head';
import NavbarMobileApp from '@/components/Navbar-mobile-app/navbar-mobile-app';
import Footer2 from '@/components/Footer2/footer2';
import PageHeader2 from '@/components/Page-header2/page-header2';
import Works4 from '@/components/Works4/works4';
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
          title="Latest Works"
          links={[
            { id: 1, name: 'Home', url: '/' },
            {
              id: 2,
              name: 'Portfolio',
              url: '/mobile-app/portfolio',
            },
          ]}
        />
        <Works4 />
        <Footer2 />
      </>
    </>
  );
};

export default MobileAppPricingPlanDark;
