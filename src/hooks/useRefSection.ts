import {
  type RefObject,useEffect, useRef,
} from 'react';

import type { AppStore } from '../models/AppStore';
import useAppStore from '../store/app';

function useRefSection(secName: keyof AppStore['sections']): RefObject<HTMLDivElement | null> {
  const { setSection } = useAppStore();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current)
      setSection(secName, ref.current);
  }, [ref.current]);

  return ref;
}

export { useRefSection };
