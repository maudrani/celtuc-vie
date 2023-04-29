import CaseStudy from '@/components/Case-study/case-study';
import Works3 from '@/components/Works3/works3';
import React from 'react';
import { getSliceData } from './adapters';

const Variations = {
  default: CaseStudy,
  withTitle: Works3,
};

const Carousel1 = ({ slice }) => {
  const data = getSliceData(slice);
  const Component = Variations[slice.variation];

  return <Component {...data} />;
};

export default Carousel1;
