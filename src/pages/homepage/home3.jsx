import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import Intro3 from '@/components/Intro3/intro3';
import Footer from '@/components/Footer/footer';
import FullTestimonials from '@/components/Full-testimonials/full-testimonials';
import Team from '@/components/Team/team';
import Blogs3 from '@/components/blogs/Blogs3/blogs3';
import Services2 from '@/components/Services2/services2';
import Works2 from '@/components/Works2/works2';
import Numbers2 from '@/components/Numbers2/numbers2';

const Homepage3 = () => {
  return (
    <>
      <Navbar />
      <Intro3 />
      <Services2 style="4item" />
      <Works2 />
      <Numbers2 />
      <FullTestimonials withIMG />
      <Team />
      <Blogs3 />
      <Footer hideBGCOLOR />
    </>
  );
};

export default Homepage3;
