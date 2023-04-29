import React, { useContext, useEffect } from 'react';
import AboutIntro from '@/components/About-intro';
import AboutUs from '@/components/About-us/about-us';
import AboutUs2 from '@/components/About-us2/about-us2';
import AboutUs3 from '@/components/About-us3/about-us3';
import AboutUs4 from '@/components/About-us4/about-us4';
import AboutUs5 from '@/components/About-us5/about-us5';
import AboutUs6 from '@/components/About-us6/about-us6';
import CallToAction from '@/components/Call-to-action/call-to-action';
import CaseStudy from '@/components/Case-study/case-study';
import Clients from '@/components/Clients/clients';
import Clients2 from '@/components/Clients2/clients2';
import Clients3 from '@/components/Clients3/clients3';
import ShowcasesFullScreen from '@/components/Showcases-full-screen/showcases-full-screen';
import Works3 from '@/components/Works3/works3';
import { StylesContext } from '@/contexts/styles';
import Intro4 from '@/components/Intro4/intro4';
import Video2 from '@/components/Video2/video2';
import Works from '@/components/Works/works';

const SlicesTest = () => {
  const { changeTheme } = useContext(StylesContext);

  useEffect(() => {
    /* changeTheme('light'); */
  }, []);

  return (
    <div>
      {/* <AboutIntro /> */}
      {/* <AboutUs /> */}
      {/* <AboutUs2 /> */}
      {/* <AboutUs3 /> */}
      {/* <AboutUs4 /> */}
      {/* <AboutUs5 /> */}
      {/* <AboutUs6 /> */}

      {/* BLOGS LEFT */}

      {/* <CallToAction /> */}
      {/* <CaseStudy /> */}
      {/* <Clients /> */}
      {/* <Clients2 /> */}
      {/* <Clients3 /> */}

      {/* Selected for Natural   */}
      {/* <ShowcasesFullScreen /> */}

      {/* Hero */}
      {/* <Works3 /> */}

      {/* <AboutUs /> */}

      {/* Video */}
      {/* <Video2 /> */}

      <Works />
    </div>
  );
};

export default SlicesTest;
