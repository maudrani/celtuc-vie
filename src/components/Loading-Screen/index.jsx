import React, { useContext } from 'react';
import Script from 'next/script';
import loadingPace from '../../common/loadingPace';
import { AppDataContext } from '@/contexts/appdata';

const LoadingScreen = () => {
  const { showLoading } = useContext(AppDataContext);

  React.useEffect(() => {
    let bodyEl = document.querySelector('body');
    if (showLoading) {
      loadingPace();

      if (bodyEl.classList.contains('hideX')) {
        bodyEl.classList.remove('hideX');
      }
    } else {
      bodyEl.classList.add('hideX');
    }
  });

  if (!showLoading) return;
  
  return (
    <>
      <div className={`${showLoading === true ? 'showX' : 'hideX'}`}>
        <div className="loading">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div id="preloader"></div>
      </div>
      {showLoading ? (
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ''
      )}
    </>
  );
};

export default LoadingScreen;
