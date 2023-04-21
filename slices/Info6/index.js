import AboutUs6 from '@/components/About-us6/about-us6';
import React from 'react';
import { getSliceData } from './adapters';

const Info6 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs6 {...data} />;
};

export default Info6;
