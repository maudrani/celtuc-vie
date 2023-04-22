import React from 'react';
import Link from 'next/link';

const LatestNews = () => {
  return (
    <section className="blog section-padding" id="blog-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Latest News
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/arch/blog/1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog" className="tag">
                      <span className="main-color">Architecture</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link
                      href="/blog-details/blog-details-dark"
                      className="simple-btn main-color"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/arch/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog" className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </Link>
                    <span>/</span>
                    <Link href="/blog" className="tag">
                      <span className="main-color">Architecture</span>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                      How to use solid color combine with simple furnitures.
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link
                      href="/blog-details/blog-details-dark"
                      className="simple-btn main-color"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
