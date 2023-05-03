import React from 'react';
import { isMobile } from 'react-device-detect';
import mouseEffect from '../../common/mouseEffect';

const Cursor = () => {
  React.useEffect(() => {
    if (isMobile) return;
    mouseEffect();
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
