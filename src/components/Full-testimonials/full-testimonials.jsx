import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import { getDataFromProps } from './adapters';
import Image from 'next/image';

const FullTestimonials = props => {
  const slickRef = useRef();
  const windowsWidth = useWindowWidth();

  const { background_image, slides, top_title, title, hasHeading } =
    getDataFromProps({
      props,
      windowsWidth,
    });

  if (!slides && !hasHeading) return;

  return (
    <section
      className={`testimonials ${
        background_image && 'section-padding bg-img'
      } ${props.withCOLOR && 'section-padding back-color'} ${
        props.noPadding ? '' : 'section-padding'
      } ${props.classText ? props.classText : ''}`}
      style={{
        backgroundImage: `${
          background_image ? `url(${background_image.url})` : 'none'
        }`,
      }}
      data-overlay-dark={6}
    >
      {hasHeading && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head  text-center">
                {top_title && (
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {top_title}
                  </h6>
                )}
                {title && <h3 className="wow color-font">{title}</h3>}
              </div>
            </div>
          </div>
        </div>
      )}

      {slides && (
        <div
          className={`container-fluid position-re`}
          style={{ zIndex: '1', position: 'relative' }}
        >
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slick-item"
                ref={slickRef}
                dots={false}
                infinite={true}
                arrows={false}
                centerMode={true}
                autoplay={false}
                rows={1}
                slidesToScroll={1}
                slidesToShow={3}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      centerMode: false,
                    },
                  },
                ]}
              >
                {slides.map(slide => {
                  const { left_title, left_content } = slide;
                  const image = slide.image?.['main'];
                  const hasLeftCol =
                    !!image?.url || !!left_content || !!left_title;

                  return (
                    <div key={slide.id} className="item">
                      {hasLeftCol && (
                        <div className="info valign">
                          <div className="cont">
                            <div className="author">
                              {image?.url && (
                                <div className="img">
                                  <Image
                                    src={image.url}
                                    alt={image.alt}
                                    width={image.dimensions.width}
                                    height={image.dimensions.height}
                                    style={{ objectFit: 'cover' }}
                                  />
                                </div>
                              )}
                              {left_title && (
                                <h6 className="author-name color-font">
                                  {left_title}
                                </h6>
                              )}
                              {left_content && (
                                <span className="author-details">
                                  {left_content}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                      {slide.content && (
                        <p style={{ opacity: 1 }}>{slide.content}</p>
                      )}
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FullTestimonials;
