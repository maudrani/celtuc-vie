import React, { useCallback, useContext } from 'react';
import particlesConfig from '../../config/particle-config';
import particlesBlackConfig from '../../config/pr-s-black';
import Particles from 'react-tsparticles';
import { StylesContext } from '@/contexts/styles';
import { loadFull } from 'tsparticles';
import HighlightedText from '../_UI/HighlightedText';
import { Container, Title } from './styled';
import Link from 'next/link';
import { getDataFromProps } from './adapters';
import { GetAnchorTagDataOnPrismicLink } from 'src/utils/adapters/prismic';

const Intro4 = props => {
  const { theme } = useContext(StylesContext);

  const { content, link, particles, details, hasContent } = getDataFromProps({ props });

  if(!hasContent) return

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Container className="particles circle-bg valign" height={100}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="cont text-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {!!content && (
                <Title className="title">
                  <HighlightedText text={content} />
                </Title>
              )}

              {link.valid && (
                <Link
                  {...GetAnchorTagDataOnPrismicLink(link.url)}
                  className="butn bord curve mt-30"
                  style={{
                    position: 'relative',
                    zIndex: 100,
                    width: 'fit-content',
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {particles && (
        <Particles
          id="tsparticles"
          options={theme.isLight ? particlesBlackConfig : particlesConfig}
          init={particlesInit}
        />
      )}

      {details && (
        <>
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
          <div className="line bottom left"></div>
        </>
      )}
    </Container>
  );
};

export default Intro4;
