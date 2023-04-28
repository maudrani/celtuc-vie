import React, { Fragment, useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import removeSlashFromPagination from '../../common/removeSlashpagination';
import {
  PanelBottom,
  ParticlesContainer,
  SlideContainer,
  SliderContainer,
} from './styled';
import { getDataFromProps } from './adapters';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import { useOnScreen } from 'src/utils/hooks';
import Particles from 'react-tsparticles';
import particlesConfig from './particle-config';
import { loadFull } from 'tsparticles';

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const SlideContent = ({ slide }) => {
  const containerRef = useRef();
  const isOnView = useOnScreen({
    ref: containerRef,
    options: { treshold: 1 },
  });

  return (
    <SlideContainer
      className="bg-img valign"
      style={{
        backgroundImage: slide.image?.url && `url(${slide.image?.url})`,
      }}
      data-overlay-dark={isOnView ? 3 : 10}
      isOnView={isOnView}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h1>
                <Link href={`/project-details2/project-details2-dark`}>
                  <div className="stroke" data-swiper-parallax="-2000">
                    {slide.title_top}
                  </div>
                  <span className="subtitle" data-swiper-parallax="-5000">
                    {slide.title_bottom}
                  </span>
                </Link>
                <div className="bord"></div>
              </h1>
              <div className="discover">
                <Link href={slide.link.url.url || '#'}>
                  <span>
                    {slide.link.name.map(wrd => (
                      <Fragment key={`wrd-${wrd}`}>
                        <span>{wrd}</span>
                        <br />
                      </Fragment>
                    ))}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          right: '10%',
        }}
        ref={containerRef}
      />
    </SlideContainer>
  );
};

const ShowcasesFullScreen = props => {
  const windowsWidth = useWindowWidth();
  const [load, setLoad] = React.useState(true);
  const particlesRef = useRef();

  const { slides } = getDataFromProps({ props, windowsWidth });

  React.useEffect(() => {
    removeSlashFromPagination();
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  if (!slides) return;

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <SliderContainer className="slider showcase-full">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={swiper => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    'data-swiper-parallax',
                    0.75 * swiper.width
                  );
                }

                swiper.on('transitionStart', s => {
                  particlesRef.current.style.transition = '0.2s';
                  particlesRef.current.style.opacity = '0';
                });
                swiper.on('touchStart', s => {
                  particlesRef.current.style.transition = '0.2s';
                  particlesRef.current.style.opacity = '0';
                });
                swiper.on('transitionEnd', s => {
                  particlesRef.current.style.transition = '1s';
                  particlesRef.current.style.opacity = '1';
                });
                swiper.on('touchEndt', s => {
                  particlesRef.current.style.transition = '1s';
                  particlesRef.current.style.opacity = '1';
                });

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {slides.map(slide => (
              <SwiperSlide
                key={slide.id}
                className="swiper-slide"
                style={{ width: '100%' }}
              >
                <SlideContent slide={slide} />
              </SwiperSlide>
            ))}
            <ParticlesContainer ref={particlesRef}>
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
              />
            </ParticlesContainer>
          </Swiper>
        ) : null}
      </div>

      <PanelBottom className="txt-botm">
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>

        <div className="swiper-pagination dots" ref={paginationRef}></div>
      </PanelBottom>
    </SliderContainer>
  );
};

export default ShowcasesFullScreen;
