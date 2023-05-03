import React, { useEffect } from 'react';
import Link from 'next/link';
import initIsotope from '@/common/initIsotope';
import LinkWrapper from '../ParsedLink';
import { startCase, uniq, uniqBy } from 'lodash';
import { GetDataFromProps } from './adapters';
import useWindowWidth from 'src/utils/hooks/useWindowsWidth';
import Image from 'next/image';

const FilterItem = ({ filter, label, active }) => (
  <span data-filter={filter} className={active ? 'active' : ''}>
    {label}
  </span>
);

const Item = ({ item, windowsWidth }) => {
  const isMobile = windowsWidth < 570;

  const size = {
    50: {
      className: '',
      width: 570,
      height: !isMobile ? 570 : 345,
    },
    25: {
      className: '',
      width: 570,
      height: !isMobile ? 285 : 172,
    },
    15: {
      className: 'width2',
      width: 570,
      height: !isMobile ? 253 : 172,
    },
  }[item.size || '50'];

  const className = `${size.className} ${item.categories
    ?.map(cat => `${cat?.toLowerCase()}`)
    .join(' ')}`
    .trim()
    .replace(/  /gim, ' ');

  const image = item.image?.[item.size];

  return (
    <div className={`items ${className} wow fadeInUp`} data-wow-delay=".4s">
      {image && (
        <div className="item-img">
          <LinkWrapper linkObj={item.link} className="imago wow">
            <Image
              src={image.url}
              width={size.width}
              height={size.height}
              style={{
                objectFit: 'cover',
              }}
              alt={image.alt}
            />
            <div className="item-img-overlay"></div>
          </LinkWrapper>
        </div>
      )}
      {(item.categories || item.title) && (
        <div className="cont">
          <h6 className="color-font">{item.title}</h6>
          <span>
            {item.categories.map((category, idx) => (
              <React.Fragment key={idx}>
                {category}
                {idx < item.categories.length - 1 && ', '}
              </React.Fragment>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

const WorksStyle3 = props => {
  const windowsWidth = useWindowWidth();
  const { show_filters, items } = GetDataFromProps({ props, windowsWidth });

  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 10);
  }, []);

  if (!items) return;

  const filters =
    show_filters &&
    uniqBy(
      items
        .map(({ categories }) => categories)
        .flat()
        .map(cat => {
          cat = cat.trim();

          return {
            id: `filter-${cat}`,
            filter: `.${cat?.toLocaleLowerCase()}`,
            label: startCase(cat),
          };
        }),
      'id'
    );

  return (
    <section className="portfolio-cr section-padding pb-50">
      <div className="container">
        <div className="row">
          {show_filters && (
            <div className="filtering text-center col-12">
              <div className="filter">
                <FilterItem filter="*" label="All" active />
                {filters.map(filter => (
                  <FilterItem key={filter.id} {...filter} />
                ))}
              </div>
            </div>
          )}

          <div className="gallery-mons full-width">
            {items.map((item, index) => (
              <Item key={index} item={item} windowsWidth={windowsWidth} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
