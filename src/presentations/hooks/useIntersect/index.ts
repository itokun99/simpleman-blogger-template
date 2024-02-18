import { useMemo } from 'react';
import { useInView, IntersectionOptions } from 'react-intersection-observer';

const defaultConfig = {
  triggerOnce: true,
  delay: 1000,
  initialInView: false,
  threshold: [0, 0.25, 0.5, 0.75, 1]
};
export function useIntersect(userConfig?: IntersectionOptions) {
  const configs = useMemo(
    () => (userConfig ? { ...defaultConfig, ...userConfig } : defaultConfig),
    [userConfig]
  );
  const inView = useInView(configs);

  return inView;
}
