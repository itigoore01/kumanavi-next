export type Stage =
  // アラマキ砦
  | 'sockeyeStation'
  // ムニエール海洋発電所
  | 'goneFissionHydroplant'
  // シェケナダム
  | 'spawningGrounds'
  // 難破船ドン・ブラコ
  | 'maroonersBay';

export const stages = [
  'sockeyeStation',
  'goneFissionHydroplant',
  'spawningGrounds',
  'maroonersBay',
] as const satisfies readonly Stage[];

const displayStages = {
  sockeyeStation: 'アラマキ砦',
  goneFissionHydroplant: 'ムニエール海洋発電所',
  spawningGrounds: 'シェケナダム',
  maroonersBay: '難破船ドン・ブラコ',
} satisfies Record<Stage, string>;

export function getDisplayStage(stage: Stage) {
  return displayStages[stage];
}
