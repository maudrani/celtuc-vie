import React, { useRef } from 'react';
import aboutSkillsProgress from '../../common/aboutSkillsProgress';
import { useOnScreen } from 'src/utils/hooks';

const AboutUs5 = () => {
  const animationTriggerRef = useRef(null);

  const isOnScreen = useOnScreen({ ref: animationTriggerRef, oneTime: true });

  React.useEffect(() => {
    if (!document || !isOnScreen) return;

    aboutSkillsProgress({
      skillsEl: document.querySelector('.about-cr .skills-box'),
      progresEl: document.querySelectorAll('.skill-progress .progres'),
    });
  }, [isOnScreen]);

  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/4.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">UI / UX Designer</h3>
              <h5 className="co-tit mb-15">
                We help to create visual strategies.
              </h5>
              <p>
                We are Vie. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40" ref={animationTriggerRef}>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Apps Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
