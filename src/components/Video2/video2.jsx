import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { Container } from './styled';

const Video2 = props => {
  const [isOpen, setOpen] = React.useState(false);
  const windowsWidth = useWindowsWidth();

  const { video, image, captions, hasImage, hasCaptions } = getDataFromProps({
    props,
    windowsWidth,
  });

  return (
    <Container
      className="video bg-img parallaxie"
      style={{
        backgroundImage: hasImage ? `url(${image.url})` : 'url()',
        backgroundPosition: 'center',
      }}
    >
      {typeof window !== 'undefined' && video && (
        <ModalVideo
          {...video}
          autoplay
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        />
      )}
      {video && (
        <a
          className="vid valign"
          onClick={e => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <div className="vid-butn">
            <span className="icon">
              <i className="pe-7s-play"></i>
            </span>
          </div>
        </a>
      )}
      {hasCaptions && (
        <div className="container">
          <div className="stauts">
            {captions.map(cap => (
              <div key={cap.id} className="item">
                {cap.title &&
                  cap.title.map((_t, idx) => <h4 key={`_t-$${idx}}`}>{_t}</h4>)}
                {cap.description &&
                  cap.description.map((_d, idx) => (
                    <h6
                      key={`_t-$${idx}}`}
                      className={`${idx === 0 && cap.title ? 'mt-30' : ''} ${
                        idx + 1 != cap.description.length ? 'mb-15' : ''
                      }`}
                    >
                      {_d}
                    </h6>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Video2;
