import { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import { images } from './images';

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width: 5000,
  height: 5000,
}));

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => setIndex(index);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        slides={slides}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        zoom={{
          wheelZoomDistanceFactor: 1000,
          scrollToZoom: true,
        }}
      />
    </div>
  );
}
