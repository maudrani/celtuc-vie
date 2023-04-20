import AboutUs from '@/components/About-us/about-us';
import React from 'react';
import { getSliceData } from './adapters';

const InfoStatusImage1 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs {...data} />;
};

export default InfoStatusImage1;
