import React, { useContext } from 'react';
import Navbar from '@/components/Navbar/navbar';
import Services from '@/components/Services/services';
import VideoWithTestimonials from '@/components/Video-with-testimonials/video-with-testimonials';
import SkillsCircle from '@/components/Skills-circle/skills-circle';
import Clients from '@/components/Clients/clients';
import CallToAction from '@/components/Call-to-action/call-to-action';
import Footer from '@/components/Footer/footer';
import PagesHeader from '@/components/Pages-header';
import AboutIntro from '@/components/About-intro';
import Team from '@/components/Team/team';
import MinimalArea from '@/components/Minimal-Area/minimal-area';
import { StylesContext } from '@/contexts/styles';

const About = () => {
  const { theme } = useContext(StylesContext);

  return (
    <>
      <Navbar />
      <PagesHeader />
      <AboutIntro />
      <Services style="4item" />
      <VideoWithTestimonials />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      <Clients theme={theme.themeName} />
      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
