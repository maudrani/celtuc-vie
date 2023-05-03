import CaseStudy from '@/components/Case-study/case-study';
import FullTestimonials from '@/components/Full-testimonials/full-testimonials';
import Works from '@/components/Works/works';
import Works3 from '@/components/Works3/works3';
import React from 'react';
import { getSliceData } from './adapters';

const Variations = {
  default: CaseStudy,
  withTitle: Works3,
  centerCaption: Works,
  leftOrientedCard: FullTestimonials
};

const Carousel1 = ({ slice }) => {
  const data = getSliceData(slice);
  const Component = Variations[slice.variation];

  return <Component {...data} />;
};

export default Carousel1;
