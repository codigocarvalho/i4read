import {calculateTime} from '../calculateTime';

describe('calculateTime', () => {
  it('returns "Just now"', () => {
    const now = new Date().getTime() / 1000;
    expect(calculateTime(now)).toBe('Just now');
  });

  it('returns the number of hours ago', () => {
    const now = new Date().getTime() / 1000;
    const twoHoursAgo = now - 2 * 3600;
    expect(calculateTime(twoHoursAgo)).toBe('2 hours ago');
  });

  it('returns the number of days ago', () => {
    const now = new Date().getTime() / 1000;
    const twoDaysAgo = now - 2 * 24 * 3600;
    expect(calculateTime(twoDaysAgo)).toBe('2 days ago');
  });
});
