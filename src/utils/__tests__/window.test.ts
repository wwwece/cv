import { getWindowDimensions } from '../window';

test('window dimension properties types', () => {
  expect(typeof getWindowDimensions().height).toBe('number');
  expect(typeof getWindowDimensions().width).toBe('number');
  expect(typeof getWindowDimensions().isMobile).toBe('boolean');
  expect(typeof getWindowDimensions().isTablet).toBe('boolean');
});
