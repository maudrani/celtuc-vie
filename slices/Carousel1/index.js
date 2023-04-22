import CaseStudy from '@/components/Case-study/case-study';
import React from 'react';
import { getSliceData } from './adapters';

const Carousel1 = ({ slice }) => {
  const data = getSliceData(slice);

  return <CaseStudy {...data} />;
};

export default Carousel1;
