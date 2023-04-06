import React from 'react';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';
import WorksHeader from '@/components/Works-header/works-header';
import WorksStyle2 from '@/components/Works-style2/works-style2';

const WorksDark = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px';
      }
    }, 1000);
  }, [fixedHeader, MainContent]);

  return (
    <>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <WorksHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className="main-content">
        <WorksStyle2 grid={3} filterPosition="center" />
        <Footer />
      </div>
    </>
  );
};

export default WorksDark;
