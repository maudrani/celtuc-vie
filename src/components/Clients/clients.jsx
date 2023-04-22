import React, { useContext } from 'react';
import ClientsData from '../../data/sections/clients.json';
import Split from '../Split';
import { StylesContext } from '@/contexts/styles';
import { useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';

const Clients = props => {
  const { theme } = useContext(StylesContext);
  const windowsWidth = useWindowsWidth();

  const { top_title, title, content, links, hasLeftCol, hasRightCol } = getDataFromProps({
    props,
    windowsWidth,
  });

  if (!hasLeftCol && !hasRightCol) return null;

  const first = hasRightCol && links.slice(0, links.length / 2);
  const second = hasRightCol && links.slice(4, links.length);

  console.log(links);

  return;

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row">
          {hasLeftCol && (
            <div className="col-lg-4 valign md-mb50">
              <div className="sec-head mb-0">
                {top_title && (
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    {top_title}
                  </h6>
                )}
                {title && <h3 className="wow mb-20 color-font">{title}</h3>}
                {isArray(content) &&
                  !isEmpty(content) &&
                  content.map(item => <p key={item.id}>{item.text}</p>)}
              </div>
            </div>
          )}
          <div className={`col-lg-${hasLeftCol ? '8' : '10'} margin-center`}>
            <div>
              <div className="row bord">
                {first.map((item, _idx) => {
                  const idx = _idx + 1;

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
                          <img src={item[`img_${themeName}`]} alt="" />
                          <Split>
                            <a
                              href="#0"
                              className="link words chars splitting"
                              data-splitting
                            >
                              {item.url}
                            </a>
                          </Split>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {second.map(item => (
                  <div
                    key={item.id}
                    className={`${
                      item.id == 5
                        ? 'col-md-3 col-6 brands sm-mb30'
                        : item.id == 6
                        ? 'col-md-3 col-6 brands sm-mb30'
                        : item.id == 7
                        ? 'col-md-3 col-6 brands'
                        : item.id == 8
                        ? 'col-md-3 col-6 brands'
                        : ''
                    }`}
                  >
                    <div
                      className="item wow fadeIn"
                      data-wow-delay={`${
                        item.id == 1
                          ? '.4'
                          : item.id == 2
                          ? '.7'
                          : item.id == 3
                          ? '.5'
                          : item.id == 4
                          ? '.3'
                          : ''
                      }s`}
                    >
                      <div className="img">
                        {theme.themeName === 'light' ? (
                          <img src={item.lightImage} alt="" />
                        ) : (
                          <img src={item.darkImage} alt="" />
                        )}
                        <Split>
                          <a
                            href="#0"
                            className="link words chars splitting"
                            data-splitting
                          >
                            {item.url}
                          </a>
                        </Split>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
