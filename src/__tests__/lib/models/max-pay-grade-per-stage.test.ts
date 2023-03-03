import { findMaxPayGrade } from '@/lib/models/max-pay-grade-per-stage';

describe('MaxPayGradePerStage', () => {
  it('find max pay grade', () => {
    expect(findMaxPayGrade({})).toBeNull();

    expect(
      findMaxPayGrade({
        // でんせつ 40
        sockeyeStation: { title: 'eggsecutiveVP', point: 40 },
        // かけだし 90
        goneFissionHydroplant: { title: 'apprentice', point: 90 },
      })
    ).toEqual({ title: 'eggsecutiveVP', point: 40 });

    expect(
      findMaxPayGrade({
        // でんせつ 40
        sockeyeStation: { title: 'eggsecutiveVP', point: 40 },
        // でんせつ 90
        goneFissionHydroplant: { title: 'eggsecutiveVP', point: 90 },
      })
    ).toEqual({ title: 'eggsecutiveVP', point: 90 });

    expect(
      findMaxPayGrade({
        // かけだし 90
        goneFissionHydroplant: { title: 'apprentice', point: 90 },
      })
    ).toEqual({ title: 'apprentice', point: 90 });
  });
});
