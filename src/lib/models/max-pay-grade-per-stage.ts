import { PayGrade } from './pay-grade';
import { Stage } from './stage';
import { compareTitle } from './title';

export type MaxPayGradePerStage = Partial<Record<Stage, PayGrade>>;

export function findMaxPayGrade(
  maxPayGradePerStage: MaxPayGradePerStage
): PayGrade | null {
  const payGrades = Object.values(maxPayGradePerStage);

  return payGrades.reduce<PayGrade | null>((max, current) => {
    if (max === null) {
      return current;
    }

    const result = compareTitle(max.title, current.title);

    if (result === 0) {
      return current.point > max.point ? current : max;
    }

    return result < 0 ? current : max;
  }, null);
}
