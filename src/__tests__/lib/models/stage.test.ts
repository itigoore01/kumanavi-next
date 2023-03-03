import { getDisplayStage } from '@/lib/models/stage';

describe('getDisplayStage', () => {
  it('returns display stage', () => {
    expect(getDisplayStage('sockeyeStation')).toBe('アラマキ砦');
    expect(getDisplayStage('goneFissionHydroplant')).toBe(
      'ムニエール海洋発電所'
    );
    expect(getDisplayStage('spawningGrounds')).toBe('シェケナダム');
    expect(getDisplayStage('maroonersBay')).toBe('難破船ドン・ブラコ');
  });
});
