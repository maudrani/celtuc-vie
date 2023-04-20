import React from 'react';
import AboutIntro from '@/components/About-intro';
import { getSliceData } from './adapters';

const TitleText1 = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutIntro {...data} />;
};

export default TitleText1;
