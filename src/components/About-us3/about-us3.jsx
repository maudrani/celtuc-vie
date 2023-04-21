import React from 'react';
import Split from '../Split';
import Link from 'next/link';
import { thumparallax, thumparallaxDown } from '../../common/thumparallax';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';
import Image from 'next/image';

const AboutUs3 = props => {
  const windowsWidth = useWindowsWidth();

  const {
    title,
    content,
    link,
    image1,
    image2,
    caption_title,
    caption_description,
    hasLeftCol,
    hasRightCol,
    hasCaption,
    separator
  } = getDataFromProps({ props, windowsWidth });

  if (!hasLeftCol && !hasRightCol) return null;

  React.useEffect(() => {
    setTimeout(() => {
      thumparallax();
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="agency section-padding position-re">
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div className={`col-lg-${hasRightCol ? '7' : '9'} margin-center`}>
              <div className="imgsec md-mb50">
                <div className="row">
                  {!!(hasCaption || image1) && (
                    <div className="col-md-6">
                      <div className="item">
                        {image1 && windowsWidth && (
                          <div
                            className="imgone big-bord wow fadeInDown"
                            data-wow-delay=".8s"
                          >
                            <Image
                              src={image1.url}
                              alt={image1.alt}
                              width={image1.dimensions.width}
                              height={image1.dimensions.height}
                              className="thumparallax-down"
                            />
                          </div>
                        )}
                        {hasCaption && (
                          <div className="exp">
                            {caption_title && (
                              <h2 className="nmb-font">{caption_title}</h2>
                            )}
                            {caption_description && (
                              <h6>{caption_description}</h6>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {image2 && windowsWidth && (
                    <div className="col-md-6">
                      <div className="item">
                        <div
                          className="imgtwo big-bord wow fadeInUp"
                          data-wow-delay=".6s"
                        >
                          <Image
                            src={image2.url}
                            alt={image2.alt}
                            width={image2.dimensions.width}
                            height={image2.dimensions.height}
                            className="thumparallax"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {hasRightCol && (
            <div
              className={`col-lg-${
                hasRightCol ? '5' : '7'
              } margin-center valign`}
            >
              <div className="content">
                {title && (
                  <Split>
                    <h4 className="wow words chars splitting" data-splitting>
                      {title}
                    </h4>
                  </Split>
                )}
                {isArray(content) && !isEmpty(content) && (
                  <Split>
                    {content.map((item, idx) => (
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

                {link?.valid && (
                  <Link
                    href={link.url}
                    className="butn bord curve mt-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {separator && <div className="line bottom right"></div>}
    </section>
  );
};

export default AboutUs3;
