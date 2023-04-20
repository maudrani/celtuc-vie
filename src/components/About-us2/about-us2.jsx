import React from 'react';
import Split from '../Split';
import AboutUs2Date from '../../data/sections/about-us2.json';
import SimpleGrid from '../_UI/SimpleGrid';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import { getDataFromProps } from './adapters';
import Image from 'next/image';
import { isArray, isEmpty } from 'lodash';

const AboutUs2 = props => {
  const windowsWidth = useWindowWidth();

  const {
    image1,
    image2,
    image3,

    top_title,
    title,
    content,
    features,
    hasLeftCol,
    hasRightCol,
  } = getDataFromProps({ props, windowsWidth });

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div className={`col-lg-${hasRightCol ? '5' : '8'} margin-center`}>
              <div className="img-mons sm-mb30">
                <div className="row">
                  {image1 && windowsWidth && (
                    <div className="col-md-5 cmd-padding valign">
                      <div
                        className="img1 wow w-100 imago"
                        data-wow-delay=".5s"
                      >
                        <Image
                          src={image1.url}
                          alt={image1.alt}
                          width={image1.dimensions.width || 700}
                          height={image1.dimensions.height || 440}
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-md-7 cmd-padding">
                    {image2 && windowsWidth && (
                      <div className="img2 wow imago" data-wow-delay=".3s">
                        <Image
                          src={image2.url}
                          alt={image2.alt}
                          width={image2.dimensions.width || 700}
                          height={image2.dimensions.height || 700}
                        />
                      </div>
                    )}
                    {image3 && windowsWidth && (
                      <div className="img3 wow imago" data-wow-delay=".8s">
                        <Image
                          src={image3.url}
                          alt={image3.alt}
                          width={image3.dimensions.width || 700}
                          height={image3.dimensions.height || 440}
                        />
                      </div>
                    )}
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {hasRightCol && (
            <div
              className={`col-lg-${
                hasLeftCol ? '6' : '8'
              } offset-lg-1 valign margin-center`}
            >
              <div className="content w-100">
                {top_title && (
                  <div className="sub-title">
                    <h6>{top_title}</h6>
                  </div>
                )}
                {title && (
                  <Split>
                    <h3
                      className="words chars splitting main-title wow"
                      data-splitting
                    >
                      {title}
                    </h3>
                  </Split>
                )}
                {isArray(content) && !isEmpty(content) && (
                  <Split>
                    {content &&
                      !isEmpty(content) &&
                      content.map((item, idx) => (
                        <p
                          key={`item-${idx}`}
                          className={`words chars splitting wow txt ${
                            idx + 1 !== content.length ? 'mb-10' : ''
                          }`}
                          data-splitting
                        >
                          {item}
                        </p>
                      ))}
                  </Split>
                )}
                {isArray(features) && !isEmpty(features) && (
                  <div className="ftbox mt-30">
                    <SimpleGrid columnSize={80} gap={10} fitItems>
                      {features.map((feature, idx) => (
                        <div
                          key={feature.id}
                          className={`icon-card wow fadeIn`}
                          data-wow-delay={(idx + 1) * 0.3}
                        >
                          <span
                            className={`icon color-font pe-7s-${feature.feature_icon}`}
                          ></span>
                          <h6>{feature.feature_name}</h6>
                          <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      ))}
                    </SimpleGrid>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
