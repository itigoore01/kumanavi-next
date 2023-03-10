import { chunk } from '@/lib/utils/chunk';

describe('Chunk', () => {
  it('returns chunked array', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
      [11],
    ]);
  });
});
