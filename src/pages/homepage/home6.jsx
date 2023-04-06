import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import IntroWithSlider from '@/components/Intro-with-slider/intro-with-slider';
import Numbers from '@/components/Numbers/numbers';
import Blogs2 from '@/components/blogs/Blogs2/blogs2';
import CallToAction from '@/components/Call-to-action/call-to-action';
import Footer from '@/components/Footer/footer';
import Services4 from '@/components/Services4/services4';
import AboutUs4 from '@/components/About-us4/about-us4';
import WorksStyle3 from '@/components/Works-style3/works-style3';
import FullTestimonials from '@/components/Full-testimonials/full-testimonials';

const Homepage1 = () => {
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
        <Services4 serviceMB50 />
        <AboutUs4 />
        <Numbers />
        <WorksStyle3 />
        <FullTestimonials />
        <Blogs2 />
        <CallToAction img="/img/patrn1.png" />
        <Footer />
      </div>
    </>
  );
};

export default Homepage1;
