import React, { useContext } from 'react';
import Team from '@/components/Team/team';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import Clients2 from '@/components/Clients2/clients2';
import Blogs4 from '@/components/blogs/Blogs4/blogs4';
import Services from '@/components/Services/services';
import AboutUs2 from '@/components/About-us2/about-us2';
import Portfolio from '@/components/Portfolio/portfolio';
import SContactForm from '@/components/s-contact-form/s-contact-form';
import IntroWithSlider from '@/components/Intro-with-slider/intro-with-slider';
import VideoWithTestimonials from '@/components/Video-with-testimonials/video-with-testimonials';
import { StylesContext } from '@/contexts/styles';

const Homepage4 = () => {
  const { theme } = useContext(StylesContext);
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px';
      }
    }, 1000);
  }, [fixedSlider, MainContent]);

  return (
    <>
      <Navbar />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs2 />
        <Services lines />
        <Portfolio grid={2} filterPosition="left" />
        <VideoWithTestimonials />
        <Clients2 theme={theme.themeName} length={4} />
        <Team />
        <Blogs4 />
        <SContactForm />
        <Footer hideBGCOLOR />
      </div>
    </>
  );
};

export default Homepage4;
