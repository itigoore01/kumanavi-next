import { compareTitle, getDisplayTitle, Title } from '@/lib/models/title';

describe('compareTitle', () => {
  it('compare title', () => {
    expect(
      (
        [
          'profreshionalPartTimer',
          'partTimer',
          'eggsecutiveVP',
          'apprentice',
          'overachiever',
          'goGetter',
        ] satisfies Title[]
      ).sort((a, b) => compareTitle(a, b))
    ).toEqual([
      'apprentice',
      'partTimer',
      'goGetter',
      'overachiever',
      'profreshionalPartTimer',
      'eggsecutiveVP',
    ]);
  });
});

describe('getDisplayTitle', () => {
  it('returns display title', () => {
    expect(getDisplayTitle('apprentice')).toBe('かけだし');
    expect(getDisplayTitle('partTimer')).toBe('はんにんまえ');
    expect(getDisplayTitle('goGetter')).toBe('いちにんまえ');
    expect(getDisplayTitle('overachiever')).toBe('じゅくれん');
    expect(getDisplayTitle('profreshionalPartTimer')).toBe('たつじん');
    expect(getDisplayTitle('eggsecutiveVP')).toBe('でんせつ');
  });
});
