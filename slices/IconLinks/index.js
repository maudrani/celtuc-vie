import React from 'react';
import Clients from '@/components/Clients/clients';
import { getSliceData } from './adapters';

const IconLinks = ({ slice }) => {
  const data = getSliceData(slice);

  return <Clients {...data} />;
};

export default IconLinks;
