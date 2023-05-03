import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChangeSwiperStyles, getDataFromProps } from './adapters';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import Image from 'next/image';
import { GetAnchorTagDataOnPrismicLink } from 'src/utils/adapters/prismic';
import { SlideContainer } from './styled';
import LinkWrapper from '../ParsedLink';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works3 = props => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const windowsWidth = useWindowWidth();

  const { top_title, title, slides, showIndicators, hasTopRow, hasBottomRow } =
    getDataFromProps({ props, windowsWidth });

  if ((!hasTopRow && !hasBottomRow) || !windowsWidth) return;

  const slidesPerView = slides && {
    2900: slides.length >= 3 ? 2.5 : 2,
    2300: slides.length >= 3 ? 2.5 : 2,
    1520: slides.length >= 2 ? 2 : 1.5,
    1100: slides.length >= 2 ? 1.7 : 1.2,
    767: slides.length >= 2 ? 1.3 : 1.2,
    640: slides.length >= 2 ? 1.2 : 1.2,
    320: 1,
  };

  return (
    <section className="work-carousel2 metro section-padding">
      {hasTopRow && (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
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

      {hasBottomRow && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  centeredSlides={true}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={swiper => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.on('init', ChangeSwiperStyles);
                  }}
                  onSwiper={swiper => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();

                      swiper.on('slideChange', ChangeSwiperStyles);
                    });
                  }}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: slidesPerView[320],
                    },
                    640: {
                      slidesPerView: slidesPerView[640],
                    },
                    767: {
                      slidesPerView: slidesPerView[767],
                    },
                    1100: {
                      slidesPerView: slidesPerView[1100],
                    },
                    1520: {
                      slidesPerView: slidesPerView[1520],
                    },
                    2300: {
                      slidesPerView: slidesPerView[2300],
                    },
                    2900: {
                      slidesPerView: slidesPerView[2900],
                    },
                  }}
                >
                  {slides.map(item => {
                    const { top_title, title, link, image } = item;

                    return (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-slide"
                        style={{ transition: '1s ease-in-out', height: 'auto' }}
                      >
                        <SlideContainer
                          className="content"
                          style={{ height: '100%' }}
                        >
                          {image && (
                            <div className="img" style={{ height: '100%' }}>
                              <span
                                className="imgio"
                                style={{ width: '100%', height: '100%' }}
                              >
                                <span
                                  className="wow cimgio"
                                  data-delay="500"
                                ></span>
                                <Image
                                  src={image.url}
                                  width={image.dimensions.width}
                                  height={image.dimensions.height}
                                  alt={image.dimensions.alt}
                                  priority
                                  style={{
                                    height: '100%',
                                  }}
                                />
                              </span>
                            </div>
                          )}
                          {top_title && title && (
                            <div className="cont">
                              {top_title && (
                                <h6>
                                  <LinkWrapper linkObj={link}>
                                    {top_title}
                                  </LinkWrapper>
                                </h6>
                              )}
                              {title && (
                                <h4>
                                  <LinkWrapper linkObj={link}>
                                    {title}
                                  </LinkWrapper>
                                </h4>
                              )}
                            </div>
                          )}
                        </SlideContainer>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                {showIndicators && (
                  <>
                    <div
                      ref={navigationNextRef}
                      className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                    >
                      <i className="ion-ios-arrow-right"></i>
                    </div>
                    <div
                      ref={navigationPrevRef}
                      className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                    >
                      <i className="ion-ios-arrow-left"></i>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works3;
