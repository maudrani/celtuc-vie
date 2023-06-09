import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import FreelancreIntro from '@/components/Freelancre-intro/freelancre-intro';
import Services5 from '@/components/Services5/services5';
import WorksStyle4 from '@/components/Works-style4/works-style4';
import AboutUs5 from '@/components/About-us5/about-us5';
import FullTestimonials from '@/components/Full-testimonials/full-testimonials';
import Blogs2 from '@/components/blogs/Blogs2/blogs2';
import SContactForm from '@/components/s-contact-form/s-contact-form';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <FreelancreIntro />
      <Services5 />
      <WorksStyle4 />
      <AboutUs5 />
      <FullTestimonials showHead />
      <Blogs2 />
      <SContactForm noLine />
      <Footer />
    </>
  );
};

export default Homepage;
