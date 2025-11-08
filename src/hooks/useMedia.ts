import { useEffect, useState } from 'react';

const Screen = {
  DESKTOP: 1200,
  TABLET: 1024,
  MOBILE: 800,
} as const;

function useMedia(number: number) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${number}px)`);
    const handleChange = (e: MediaQueryListEvent) => {
      setFlag(e.matches);
    };
    mq.addEventListener('change', handleChange);
    setFlag(mq.matches);
  }, [number]);

  return flag;
}

export { Screen, useMedia };
