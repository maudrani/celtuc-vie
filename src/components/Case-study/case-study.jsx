import React, { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import removeSlashFromPagination from '../../common/removeSlashpagination';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import LinkWrapper from '../ParsedLink';

SwiperCore.use([Navigation, Pagination, EffectFade]);

const SlideItem = ({ item }) => {
  const slideRef = useRef();

  return (
    <div className="container d-flex align-items-end" ref={slideRef}>
      <div className="cont">
        <LinkWrapper linkObj={item.link}>
          {item.tag && <span>{item.tag}</span>}
          {item.top_title && <h6 className="main-color">{item.top_title}</h6>}
          {item.title && <h4>{item.title}</h4>}
        </LinkWrapper>
      </div>
    </div>
  );
};

const CaseStudy = props => {
  const [load, setLoad] = React.useState(true);
  const windowsWidth = useWindowsWidth();

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  const { slides } = getDataFromProps({ props, windowsWidth });

  if (!slides) return null;

  return (
    <section className="case-study">
      <h2 style={{ display: 'none' }}>&nbsp;</h2>
      <div
        id="content-carousel-container-unq-1"
        className="swiper-container"
        data-swiper="container"
      >
        {!load ? (
          <Swiper
            effect={'fade'}
            speed={1000}
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
            {slides.map(item => {
              return (
                <SwiperSlide
                  className="swiper-slide bg-img"
                  style={{
                    backgroundImage: item.image && `url(${item.image.url})`,
                  }}
                  data-overlay-dark="7"
                  key={item.id}
                >
                  <SlideItem item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
        <div className="controls">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
    </section>
  );
};

export default CaseStudy;
