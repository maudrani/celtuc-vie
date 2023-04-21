import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';

const AboutUs6 = props => {
  const windowsWidth = useWindowWidth();
  const captionRef = useRef();

  const {
    top_title,
    title,
    content,
    link,
    background_image,
    caption_title,
    caption_description,
    hasRightCol,
    hasLeftCol,
  } = getDataFromProps({ props, windowsWidth });

  useEffect(() => {
    if (!captionRef.current) return;

    const captionHeight =
      captionRef.current.querySelector('.height-sensor')?.offsetHeight;

    if (!captionHeight) return;

    const whiteBoard = captionRef.current.querySelector('.white-board');
    const imgBackground = captionRef.current.querySelector(
      '.image-background'
    );
    whiteBoard.style.minHeight = `${captionHeight + 20}px`;
    imgBackground.style.minHeight = `${captionHeight + 90}px`;
  }, [windowsWidth]);

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <section id="about" className="about-ar section-padding">
      <div className={`container`}>
        <div className="row">
          {hasLeftCol && (
            <div
              ref={captionRef}
              className={`${hasRightCol ? 'col-lg-6' : 'w-100'} valign ${
                !hasRightCol ? 'margin-center p-0' : ''
              }`}
            >
              <div className={`img ${!hasRightCol ? 'w-100' : ''}`}>
                <div
                  className={`bg-img bg-fixed hero-bg image-background ${
                    !hasRightCol ? 'w-100' : ''
                  }`}
                  style={{
                    backgroundImage:
                      background_image && `url(${background_image.url})`,
                  }}
                ></div>
                <div
                  className={`exp valign text-center white-board ${
                    !hasRightCol ? 'expand margin-center' : ''
                  }`}
                >
                  <div className="full-width height-sensor">
                    {caption_title && (
                      <h2
                        className="bg-img bg-fixed"
                        style={{
                          backgroundImage:
                            background_image && `url(${background_image.url})`,
                        }}
                      >
                        {caption_title}
                      </h2>
                    )}
                    {isArray(caption_description) &&
                      !isEmpty(caption_description) &&
                      caption_description.map((item, idx) => (
                        <p
                          key={`item-${idx}`}
                          className={`${
                            idx + 1 !== caption_description.length
                              ? 'mb-20'
                              : ''
                          }`}
                        >
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {hasRightCol && (
            <div
              className={`col-lg-${hasLeftCol ? '6' : '8'} valign ${
                !hasLeftCol ? 'margin-center' : ''
              }`}
            >
              <div className="content">
                {top_title && (
                  <h6 className="sub-title main-color ls10 text-u">
                    {top_title}
                  </h6>
                )}
                {title && <h3>{title}</h3>}
                {isArray(content) &&
                  !isEmpty(content) &&
                  content.map((item, idx) => (
                    <p
                      key={`item-${idx}`}
                      className={`${idx + 1 !== content.length ? 'mb-20' : ''}`}
                    >
                      {item}
                    </p>
                  ))}

                {link?.valid && (
                  <Link href={link.url} className="butn bord mt-30">
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
