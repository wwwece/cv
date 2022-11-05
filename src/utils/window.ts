import {} from '../theme';
import { Breakpoint } from '../theme/theme.utils';

export const getWindowDimensions = () => {
  const { innerWidth, innerHeight } = window;
  return {
    width: innerWidth,
    height: innerHeight,
    isMobile: innerWidth <= Breakpoint.mobile,
    isTablet: innerWidth <= Breakpoint.tablet,
  };
};
