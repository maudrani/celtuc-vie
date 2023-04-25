import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { resizeImage } from 'src/utils/adapters/components/image';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import SimpleGrid from '../_UI/SimpleGrid';
import { getDataFromProps } from './adapters';

const Clients3 = props => {
  const windowsWidth = useWindowWidth();
  const { title, content, links, background_details, topRow, bottomRow } =
    getDataFromProps({ props });

  if (!topRow && !bottomRow) return null;

  const columnSize =
    windowsWidth &&
    {
      [windowsWidth > 1100 && 'current']: 200,
      [windowsWidth <= 1100 && 'current']: 180,
      [windowsWidth < 990 && 'current']: 127,
      [windowsWidth < 570 && 'current']: 300,
    }['current'];

  return (
    <section className="brands pt-80 pb-80 bg-dark" data-overlay-dark="0">
      <div className="container">
        {topRow && (
          <div className="head mb-60 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="text">
                  {title && (
                    <h2 className="color-font">
                      <strong>{title}</strong>
                    </h2>
                  )}
                  {content &&
                    content.map((item, idx) => (
                      <span className="mt-20" key={idx}>
                        {item.text}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {columnSize && bottomRow && (
          <SimpleGrid columnSize={columnSize} fitItems>
            {links.map((item, index) => {
              const image = item?.img_dark?.main;

              if (!item.link?.name && !image) return;

              const imgsize = resizeImage(image?.dimensions, {
                width: 90,
              });

              return (
                <div
                  className={`valign ${item.hideOnMobile ? 'lg-hide' : ''}`}
                  key={index}
                >
                  <div className="item">
                    {image ? (
                      <div className="img">
                        <Link href={item.link?.url?.url || '#'}>
                          <Image
                            src={image.url}
                            alt={image.alt || item.link?.name || 'image'}
                            width={imgsize?.width || 120}
                            height={imgsize?.height || 120}
                            className="front"
                          />
                          <Image
                            src={image.url}
                            alt={image.alt || item.link?.name || 'image'}
                            width={imgsize?.width || 120}
                            height={imgsize?.height || 120}
                            className="back"
                          />
                        </Link>
                      </div>
                    ) : (
                      <div className="img text-center">
                        <Link href={item.link?.url?.url || '#'}>
                          <span className="front">{item.link.name}</span>
                          <span className="back">{item.link.name}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </SimpleGrid>
        )}
      </div>
      {background_details && <div className="circle-blur"></div>}
    </section>
  );
};

export default Clients3;
