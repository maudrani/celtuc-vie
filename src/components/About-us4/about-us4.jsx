import React from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';
import Image from 'next/image';

const AboutUs4 = props => {
  const windowsWidth = useWindowsWidth();

  const {
    title,
    subtitle,
    video,
    caption_title,
    caption_description,

    image,
    hasLeftCol,
    hasRightCol,
    hasCaption,
  } = getDataFromProps({ props, windowsWidth });

  if (!hasLeftCol && !hasRightCol) return null;

  const [isOpen, setOpen] = React.useState(false);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          {hasLeftCol && (
            <div
              className={`col-lg-${hasRightCol ? '6' : '7'} img md-mb50 p-0 ${
                !hasRightCol ? 'margin-center' : ''
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={image.dimensions.width}
                height={image.dimensions.height}
                className="thumparallax-down"
              />
            </div>
          )}
          {hasRightCol && (
            <div className={`col-lg-4 valign ${!hasLeftCol? 'margin-center pt-70' : ''}`}>
              <div className="cont full-width">
                {title && <h3 className="color-font">{title}</h3>}
                {subtitle && <h6>{subtitle}</h6>}
                {typeof window !== 'undefined' && (
                  <ModalVideo
                    {...video}
                    autoplay
                    isOpen={isOpen}
                    onClose={() => setOpen(false)}
                  />
                )}
                {video && (
                  <div className="vid-area">
                    <div className="vid-icon">
                      <a
                        className="vid"
                        href="https://vimeo.com/127203262"
                        onClick={e => {
                          e.preventDefault();
                          setOpen(true);
                        }}
                      >
                        <div className="vid-butn back-color">
                          <span className="icon">
                            <i className="fas fa-play"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="valign">
                      <span className="text">Watch Video</span>
                    </div>
                  </div>
                )}
                {hasCaption && (
                  <div className="states">
                    {caption_title && (
                      <h2 className="color-font fw-700">{caption_title}</h2>
                    )}

                    {isArray(caption_description) &&
                      !isEmpty(caption_description) &&
                      caption_description.map((item, idx) => (
                        <p
                          key={`item-${idx}`}
                          className={`${
                            idx + 1 !== caption_description.length
                              ? 'mb-10'
                              : ''
                          }`}
                        >
                          {item}
                        </p>
                      ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
