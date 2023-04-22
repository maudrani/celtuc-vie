import React, { Fragment } from 'react';
import Split from '../Split';
import Link from 'next/link';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';

const CallToAction = props => {
  const windowsWidth = useWindowsWidth();

  const { top_title, text, link, background_image, hasLeftCol, hasRightCol } =
    getDataFromProps({ props, windowsWidth });

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <section
      className="call-action section-padding sub-bg bg-img"
      style={{
        backgroundImage: background_image && `url(${background_image.url})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  {top_title && (
                    <h6 className="wow words chars splitting" data-splitting>
                      {top_title}
                    </h6>
                  )}
                  {isArray(text) && !isEmpty(text) && (
                    <h2 className="wow words chars splitting" data-splitting>
                      {text.map(text =>
                        text.style === 'back color' ? (
                          <Fragment key={text.id}>
                            <b className="back-color">{text.text}</b> <br />
                          </Fragment>
                        ) : (
                          <Fragment key={text.id}>
                            {text.text} <br />
                          </Fragment>
                        )
                      )}
                    </h2>
                  )}
                </Split>
              </div>
            </div>
          )}

          {hasRightCol && (
            <div
              className={`col-md-${
                hasLeftCol ? '4' : '8'
              } pl-lg-5 pl-sm-3 col-lg-${hasLeftCol ? '3' : '8'} valign`}
            >
              <Link
                href={link.url}
                className="butn bord curve wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>{link.name}</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
