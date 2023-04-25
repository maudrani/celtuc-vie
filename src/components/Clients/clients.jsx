import React, { useContext } from 'react';
import Split from '../Split';
import { StylesContext } from '@/contexts/styles';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';
import Link from 'next/link';
import { resizeImage } from 'src/utils/adapters/components/image';
import Image from 'next/image';

const Clients = props => {
  const { theme } = useContext(StylesContext);

  const { top_title, title, content, links, hasLeftCol, hasRightCol } =
    getDataFromProps({
      props,
    });

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div
              className={`col-lg-${hasRightCol ? '4' : '6'} ${
                !hasRightCol ? 'margin-center' : ''
              } valign md-mb50`}
            >
              <div
                className={`sec-head mb-0 ${hasRightCol ? 'ml-0 mr-2' : ''}`}
              >
                {top_title && (
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {top_title}
                  </h6>
                )}
                {title && <h3 className="wow mb-20 color-font">{title}</h3>}
                {isArray(content) &&
                  !isEmpty(content) &&
                  content.map((item, idx) => (
                    <p
                      key={item.id}
                      className={`${idx !== content.lenght && 'mb-10'}`}
                    >
                      {item.text}
                    </p>
                  ))}
              </div>
            </div>
          )}
          {hasRightCol && (
            <div
              className={`col-lg-${
                hasLeftCol ? '8' : '10'
              } margin-center valign`}
            >
              <div className="w-100">
                <div className="row bord">
                  {links.map((item, _idx) => {
                    const idx = _idx + 1;
                    const image = item[`img_${theme.themeName}`]?.main;

                    if (!item.link?.name || !image) return;

                    const { width, height } = resizeImage(image.dimensions, {
                      width: 90,
                    });

                    return (
                      <div key={item.id} className="col-md-3 col-6 brands">
                        <div
                          className="item wow fadeIn"
                          data-wow-delay={`${
                            idx == 1
                              ? '.3'
                              : idx == 2
                              ? '.6'
                              : idx == 3
                              ? '.8'
                              : idx == 4
                              ? '.3'
                              : ''
                          }s`}
                        >
                          <div className="img">
                            <Image
                              src={image.url}
                              alt={image.alt}
                              width={width || 75}
                              height={height || 75}
                            />

                            <Split>
                              <Link
                                href={item.link?.url?.url || '#'}
                                className="link words chars splitting"
                                data-splitting
                              >
                                {item.link.name}
                              </Link>
                            </Split>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
