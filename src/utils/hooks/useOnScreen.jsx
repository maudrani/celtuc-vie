import { useEffect, useState } from 'react';

export default function useOnScreen({
  ref,
  options = {
    rootMargin: '0px',
  },
  oneTime,
}) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires

      setIntersecting(
        oneTime ? (e) => (!e ? entry.isIntersecting : e) : entry.isIntersecting
      );
    }, options);

    const el = ref.current;

    if (el) {
      observer.observe(el);
    }

    return () => {
      try {
        observer.unobserve(el);
      } catch (err) {
        console.log(err);
      }
    };
  }, [ref, options, oneTime]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
