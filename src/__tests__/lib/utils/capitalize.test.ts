import { capitalize } from '@/lib/utils/capitalize';

describe('Capitalize', () => {
  it('returns capitalized string', () => {
    expect(capitalize('')).toBe('');
    expect(capitalize('apple')).toBe('Apple');
    expect(capitalize(' apple')).toBe(' apple');
    expect(capitalize('Apple')).toBe('Apple');
  });
});
