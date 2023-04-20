import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!window) return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}
