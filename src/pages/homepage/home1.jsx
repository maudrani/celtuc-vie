import React, { useContext } from 'react';
import Navbar from '@/components/Navbar/navbar';
import IntroWithSlider from '@/components/Intro-with-slider/intro-with-slider';
import AboutUs from '@/components/About-us/about-us';
import Services from '@/components/Services/services';
import Works from '@/components/Works/works';
import Numbers from '@/components/Numbers/numbers';
import VideoWithTestimonials from '@/components/Video-with-testimonials/video-with-testimonials';
import SkillsCircle from '@/components/Skills-circle/skills-circle';
import Clients from '@/components/Clients/clients';
import Blogs1 from '@/components/blogs/Blogs1/blogs1';
import CallToAction from '@/components/Call-to-action/call-to-action';
import Footer from '@/components/Footer/footer';
import { StylesContext } from '@/contexts/styles';

const Homepage1 = () => {
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
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <VideoWithTestimonials />
        <SkillsCircle theme={theme.themeName} />
        <Clients theme={theme.themeName} />
        <Blogs1 />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Homepage1;
