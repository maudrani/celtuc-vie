import React, { useContext } from 'react';
import Navbar from '@/components/Navbar/navbar';
import BlogDetails from '@/components/Blog-details/blog-details';
import PageHeader from '@/components/Page-header/page-header';
import Footer from '@/components/Footer/footer';
import { StylesContext } from '@/contexts/styles';

const BlogDetailsPage = () => {
  const { theme } = useContext(StylesContext);

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
        title="Blog Details."
        paragraph="All the most current news and events of our creative team."
      />
      <BlogDetails theme={theme.themeName} blog={'blog'} />
      <Footer />
    </>
  );
};

export default BlogDetailsPage;
