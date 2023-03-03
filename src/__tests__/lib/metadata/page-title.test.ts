import { pageTitle } from '@/lib/metadata/page-title';

describe('PageTitle', () => {
  it('returns page title', () => {
    expect(pageTitle()).toBe('クマナビNext');
    expect(pageTitle('')).toBe('クマナビNext');
    expect(pageTitle('TITLE')).toBe('TITLE | クマナビNext');
  });
});
