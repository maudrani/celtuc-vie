import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { isEmpty } from 'lodash';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import { getDataFromProps } from './adapters';
import { GetAnchorTagDataOnPrismicLink } from 'src/utils/adapters/prismic';
import { Container, Headings } from './styled';

const AboutUs = props => {
  const windowsWidth = useWindowWidth();

  const {
    top_title,
    title,
    content,
    link,
    stats,
    hasLeftCol,
    hasRightCol,
    image,
    details
  } = getDataFromProps({ props, windowsWidth });

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <Container className="about-us section-padding-sm">
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div
              className={`col-lg-${
                hasRightCol ? '5' : '6'
              } margin-center valign md-mb50`}
            >
              <Headings className="mb-50">
                {top_title && (
                  <h6 className="fw-100 text-u ls10 mb-20">{top_title}</h6>
                )}
                {title && (
                  <h3 className="fw-600 text-u ls1 mb-30 color-font">
                    {title}
                  </h3>
                )}

                {content &&
                  !isEmpty(content) &&
                  content.map((item, idx) => (
                    <p
                      key={`item-${idx}`}
                      className={`fw-400 ${
                        idx + 1 !== content.length ? 'mb-20' : ''
                      }`}
                    >
                      {item}
                    </p>
                  ))}

                {link?.valid && (
                  <Link
                    {...GetAnchorTagDataOnPrismicLink(link.url)}
                    className="butn bord curve mt-30"
                  >
                    <span>{link.name}</span>
                  </Link>
                )}
              </Headings>
            </div>
          )}
          {hasRightCol && (
            <div
              className={`col-lg-${hasLeftCol ? '7' : '8'} margin-center img ${details && 'details'}`}
            >
              {image && windowsWidth && (
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.dimensions.width || 1000}
                  height={image.dimensions.height || 1150}
                  priority
                  style={{objectFit: 'cover'}}
                />
              )}
              {stats && !isEmpty(stats) && (
                <div className="stauts">
                  {stats.map(item => (
                    <div className="item" key={item.id}>
                      <h4>
                        {item.stat_number}
                        <span>{item.stat_suffix}</span>
                      </h4>
                      <h6>{item.stat_name}</h6>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
