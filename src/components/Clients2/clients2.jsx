import { StylesContext } from '@/contexts/styles';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { resizeImage } from 'src/utils/adapters/components/image';
import Split from '../Split';
import { getDataFromProps } from './adapters';

const Clients2 = props => {
  const { theme } = useContext(StylesContext);
  const { center, links } = getDataFromProps({
    props,
  });

  if (isEmpty(links)) return;

  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: 'none' }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className={`col-lg-7 ${center && 'margin-center'}`}>
            <div className="row">
              {links.map(item => {
                const image = item[`img_${theme.themeName}`]?.main;

                if (!item.link?.name || !image) return;

                const { width, height } = resizeImage(image.dimensions, {
                  width: 90,
                });

                return (
                  <div key={item.id} className="col-lg-3 brands">
                    <div
                      className="item no-bord wow fadeIn"
                      data-wow-delay=".3s"
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
      </div>
    </section>
  );
};

export default Clients2;
