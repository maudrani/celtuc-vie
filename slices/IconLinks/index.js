import React from 'react';
import Clients from '@/components/Clients/clients';
import { getSliceData } from './adapters';
import Clients2 from '@/components/Clients2/clients2';
import Clients3 from '@/components/Clients3/clients3';

const Variations = {
  default: Clients,
  iconsLinkIconsOnly: Clients2,
  topContent: Clients3,
};

const IconLinks = ({ slice }) => {
  const data = getSliceData(slice);
  const Component = Variations[slice.variation];

  return <Component {...data} />;
};

export default IconLinks;
