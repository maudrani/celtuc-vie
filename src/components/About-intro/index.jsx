import { isEmpty } from 'lodash';
import React from 'react';
import Split from '../Split';

const AboutIntro = ({ title, content }) => {

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          {title && (
            <div className="col-lg-3 col-md-4">
              <div className="htit sm-mb30">
                <h4>{title}</h4>
              </div>
            </div>
          )}
          {content && !isEmpty(content) && (
            <div className="col-lg-8 offset-lg-1 col-md-8">
              <div className="text">
                <Split>
                  
                  {content.map((par, idx) => {
                    const className = `wow txt ${
                      idx + 1 !== content.length ? 'mb-10' : ''
                    } words chars splitting`;

                    return (
                      <p
                        key={`par-${idx}`}
                        className={className}
                        data-splitting
                      >
                        {par}
                      </p>
                    );
                  })}
                </Split>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
