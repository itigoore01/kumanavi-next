export type Title =
  // かけだし
  | 'apprentice'
  // はんにんまえ
  | 'partTimer'
  // いちにんまえ
  | 'goGetter'
  // じゅくれん
  | 'overachiever'
  // たつじん
  | 'profreshionalPartTimer'
  // でんせつ
  | 'eggsecutiveVP';

export const titles = [
  'apprentice',
  'partTimer',
  'goGetter',
  'overachiever',
  'profreshionalPartTimer',
  'eggsecutiveVP',
] as const satisfies readonly Title[];

export function compareTitle(a: Title, b: Title) {
  return titles.indexOf(a) - titles.indexOf(b);
}

const displayTitle = {
  apprentice: 'かけだし',
  partTimer: 'はんにんまえ',
  goGetter: 'いちにんまえ',
  overachiever: 'じゅくれん',
  profreshionalPartTimer: 'たつじん',
  eggsecutiveVP: 'でんせつ',
} satisfies Record<Title, string>;

export function getDisplayTitle(title: Title) {
  return displayTitle[title];
}
