import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import AboutUs3 from '@/components/About-us3/about-us3';
import { getSliceData } from './adapters';

const ImagesInfoData2 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs3 {...data} />;
};

export default ImagesInfoData2;
