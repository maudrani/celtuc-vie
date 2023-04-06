import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import ProjectDetails2Header from '@/components/Project-details2-header/project-details2-header';
import ProjectDate from '../../data/project-details2.json';
import ProjectIntroduction from '@/components/Project-introduction/project-introduction';
import ProjectGallery from '@/components/Project-gallery/project-gallery';
import ProjectDescription from '@/components/Project-description/project-description';
import ProjectVideo from '@/components/Project-video/project-video';
import NextProject from '@/components/Next-project/next-project';

const ProjectDetails2Dark = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject />
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails2Dark;
