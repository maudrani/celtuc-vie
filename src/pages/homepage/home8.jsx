import React, { useContext } from 'react';
import Head from 'next/head';
import Team3 from '@/components/Team3/team3';
import Intro5 from '@/components/Intro5/intro5';
import AboutUs6 from '@/components/About-us6/about-us6';
import Services6 from '@/components/Services6/services6';
import CaseStudy from '@/components/Case-study/case-study';
import NavbarArch from '@/components/Navbar-arch/navbar-arch';
import LatestNews from '@/components/Latest-news/latest-news';
import WorksStyle5 from '@/components/Works-style5/works-style5';
import FooterArch from '@/components/Footer-arch/footer-arch.jsx';
import ContactArch from '@/components/Contact-arch/contact-arch';
import TestimonialsArch from '@/components/Testimonials-arch/testimonials-arch';
import { StylesContext } from '@/contexts/styles';

const Homepage = () => {
  const { toggleSkinStyle, changeTheme } = useContext(StylesContext);

  React.useEffect(() => {
    toggleSkinStyle(true);
    changeTheme('dark');
  }, []);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>
        <NavbarArch />
        <Intro5 />
        <AboutUs6 />
        <Services6 />
        <WorksStyle5 />
        <CaseStudy />
        <Team3 />
        <TestimonialsArch />
        <LatestNews />
        <ContactArch />
        <FooterArch />
      </>
    </>
  );
};

export default Homepage;
