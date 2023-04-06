import React from 'react';
import blog3Data from '../../data/blog3.json';
import Navbar from '@/components/Navbar/navbar';
import BlogGrid from '@/components/Blog-grid/blog-grid.jsx';
import PageHeader from '@/components/Page-header/page-header';
import Footer from '@/components/Footer/footer';

const BlogGridPage = () => {
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
      <BlogGrid blogs={blog3Data} />
      <Footer />
    </>
  );
};

export default BlogGridPage;
