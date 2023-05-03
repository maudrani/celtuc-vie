import WorksStyle3 from '@/components/Works-style3/works-style3';
import React from 'react';
import { getSliceData } from './adapters';

const Variations = {
  default: WorksStyle3,
};

const Grid = ({ slice }) => {
  const data = getSliceData(slice);
  const Component = Variations[slice.variation];

  return <Component {...data} />;
};

export default Grid;
