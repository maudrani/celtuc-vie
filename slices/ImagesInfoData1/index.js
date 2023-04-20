import React from 'react';
import AboutUs2 from '@/components/About-us2/about-us2';
import { getSliceData } from './adapters';

const InfoStats2 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs2 {...data} />;
};
export default InfoStats2;
