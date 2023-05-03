import CallToAction from '@/components/Call-to-action/call-to-action';
import Intro4 from '@/components/Intro4/intro4';
import React from 'react';
import { getSliceData } from './adapters';

const Variations = {
  default: CallToAction,
  titleWithParticles: Intro4,
};

const Cta1 = ({ slice }) => {
  const data = getSliceData(slice);
  const Component = Variations[slice.variation];

  return <Component {...data} />;
};

export default Cta1;
