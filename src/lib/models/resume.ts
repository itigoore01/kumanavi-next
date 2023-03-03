import { MaxPayGradePerStage } from './max-pay-grade-per-stage';
import { z } from 'zod';
import { stages } from './stage';
import { titles } from './title';

/**
 * レジュメ
 */
export interface Resume {
  id: string;
  /**
   * 名前
   */
  name: string;
  /**
   * アバター画像
   */
  avatar: string | null;
  /**
   * ステージごとの評価
   */
  maxPayGradePerStage: MaxPayGradePerStage;
  /**
   * 自己紹介
   */
  biography: string;
  createdAt: string;
  updatedAt: string;
}

export const updateResumeSchema = z.object({
  name: z.coerce
    .string()
    .min(1, '名前を入力してください')
    .max(10, '名前は10文字以内で入力してください'),
  maxPayGradePerStage: z.record(
    z.enum(stages),
    z
      .object({
        title: z.enum(titles),
        point: z.coerce
          .number()
          .int('評価は整数で入力してください')
          .nonnegative('評価は0〜999の間で入力してください'),
      })
      .superRefine(({ title, point }, context) => {
        // でんせつは最高値999、それ以外は最高値100
        if (title === 'eggsecutiveVP') {
          if (point > 999) {
            context.addIssue({
              code: z.ZodIssueCode.too_big,
              maximum: 999,
              type: 'number',
              inclusive: true,
              path: ['point'],
              message: '評価は0〜999の間で入力してください',
            });
          }
        } else {
          if (point > 100) {
            context.addIssue({
              code: z.ZodIssueCode.too_big,
              maximum: 100,
              type: 'number',
              inclusive: true,
              path: ['point'],
              message: '評価は0〜100の間で入力してください',
            });
          }
        }
      })
  ),
  biography: z.coerce
    .string()
    .trim()
    .max(100, '自己紹介は100文字以内で入力してください'),
});

export type UpdateResumeSchema = z.infer<typeof updateResumeSchema>;
