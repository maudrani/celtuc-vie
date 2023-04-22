import CallToAction from '@/components/Call-to-action/call-to-action';
import React from 'react';
import { getSliceData } from './adapters';

const Cta1 = ({ slice }) => {
  const data = getSliceData(slice);

  return <CallToAction {...data} />;
};

export default Cta1;
