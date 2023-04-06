import React from 'react';
import blog1Data from '../../data/blog1.json';
import Navbar from '@/components/Navbar/navbar';
import BlogStanderd from '@/components/Blog-standerd/blog-standerd';
import PageHeader from '@/components/Page-header/page-header';
import Footer from '@/components/Footer/footer';

const Blog = () => {
  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogStanderd blogs={blog1Data} />
      <Footer />
    </>
  );
};

export default Blog;
