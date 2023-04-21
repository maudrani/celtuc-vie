import React, { useRef } from 'react';
import aboutSkillsProgress from '../../common/aboutSkillsProgress';
import { useOnScreen, useWindowsWidth } from 'src/utils/hooks';
import { getDataFromProps } from './adapters';
import { isArray, isEmpty } from 'lodash';
import Image from 'next/image';

const AboutUs5 = props => {
  const animationTriggerRef = useRef(null);
  const isOnScreen = useOnScreen({ ref: animationTriggerRef, oneTime: true });
  const windowsWidth = useWindowsWidth();

  const {
    title,
    subtitle,
    content,
    image,
    stats,

    hasLeftCol,
    hasRightCol,
  } = getDataFromProps({ props, windowsWidth });

  React.useEffect(() => {
    if (!document || !isOnScreen) return;

    aboutSkillsProgress({
      skillsEl: document.querySelector('.about-cr .skills-box'),
      progresEl: document.querySelectorAll('.skill-progress .progres'),
    });
  }, [isOnScreen]);

  if (!hasLeftCol && !hasRightCol) return null;

  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          {hasLeftCol && (
            <div
              className={`col-lg-${hasRightCol ? '6' : '7'} img md-mb50 p-0 ${
                !hasRightCol ? 'margin-center' : ''
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={image.dimensions.width}
                height={image.dimensions.height}
              />
            </div>
          )}
          {hasRightCol && (
            <div
              className={`col-lg-${hasLeftCol ? '5' : '7'} valign ${
                !hasLeftCol ? 'margin-center pt-70' : ''
              }`}
            >
              <div className="cont full-width">
                {title && <h3 className="color-font">{title}</h3>}
                {subtitle && <h5 className="co-tit mb-15">{subtitle}</h5>}
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
                {isArray(stats) && !isEmpty(stats) && (
                  <div className="skills-box mt-40" ref={animationTriggerRef}>
                    {stats.map(progress => (
                      <div key={progress.id} className="skill-item">
                        <h5 className="fz-14 mb-15">{progress.title}</h5>
                        <div className="skill-progress">
                          <div
                            className="progres"
                            data-value={`${progress.percentage}%`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
