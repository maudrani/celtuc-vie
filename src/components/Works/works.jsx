import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDataFromProps } from './adapters';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import LinkWrapper from '../ParsedLink';
import { Container } from './styled';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works = props => {
  const windowsWidth = useWindowWidth();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const { slides, indicators } = getDataFromProps({ props, windowsWidth });

  if(!slides) return

  return (
    <Container className="work-carousel metro position-re">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
                className="swiper-wrapper"
                slidesPerView={2}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={swiper => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={swiper => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  991: {
                    slidesPerView: 2,
                  },
                }}
              >
                {slides.map((item) => {
                  const { link, image, top_title, title } = item;

                  return (
                    <SwiperSlide className="swiper-slide" key={item.id}>
                      <div
                        className="content wow noraidus fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div
                          className="item-img bg-img wow imago"
                          style={{
                            backgroundImage: `url(${image?.url || ''})`,
                            backgroundPosition: 'center',
                          }}
                        />
                        <div className="cont">
                          <h6 className="color-font">
                          <LinkWrapper linkObj={link}>{top_title}</LinkWrapper>
                          </h6>
                          <h4>
                            <LinkWrapper linkObj={link}>{title}</LinkWrapper>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {indicators && (
                <>
                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
                  >
                    <span className="simple-btn right">Next</span>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
                  >
                    <span className="simple-btn">Prev</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Works;
