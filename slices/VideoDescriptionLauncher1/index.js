import React from 'react';
import AboutUs4 from '@/components/About-us4/about-us4';
import { getSliceData } from './adapters';

const VideoDescriptionLauncher = ({ slice }) => {
  const data = getSliceData(slice);

  return <AboutUs4 {...data} />;
};

export default VideoDescriptionLauncher;
