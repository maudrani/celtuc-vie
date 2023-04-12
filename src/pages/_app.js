import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Cursor from '@/components/cursor';
import ScrollToTop from '@/components/scrollToTop';
import LoadingScreen from '@/components/Loading-Screen';
import '../styles/main.scss';
import Contexts from '@/contexts/index';
import { GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Vie</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Contexts>
        <GlobalStyles />
        <Cursor />
        <LoadingScreen />
        <Component {...pageProps} />
        <ScrollToTop />
      </Contexts>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
