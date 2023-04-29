import Video2 from '@/components/Video2/video2';
import React from 'react';
import { getSliceData } from './adapters';

const Video = ({ slice }) => {
  const data = getSliceData(slice);

  return <Video2 {...data} />;
};

export default Video;
