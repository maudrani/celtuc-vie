import React from 'react';
import blog2Data from '../../data/blog2.json';
import Navbar from '@/components/Navbar/navbar';
import BlogListed from '@/components/Blog-list/blog-list';
import PageHeader from '@/components/Page-header/page-header';
import Footer from '@/components/Footer/footer';

const BlogList = () => {
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
        className="sub-bg"
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogListed blogs={blog2Data} />
      <Footer />
    </>
  );
};

export default BlogList;
