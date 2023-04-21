import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import AboutUs5 from '@/components/About-us5/about-us5';
import { getSliceData } from './adapters';

const ProgressInfo1 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs5 {...data} />;
};

export default ProgressInfo1;
