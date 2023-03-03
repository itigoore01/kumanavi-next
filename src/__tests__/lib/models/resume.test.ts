import { UpdateResumeSchema, updateResumeSchema } from '@/lib/models/resume';
import { SafeParseReturnType, SafeParseError, typeToFlattenedError } from 'zod';

describe('updateResumeSchema', () => {
  it('valid resume', () => {
    expect(
      updateResumeSchema.safeParse({
        name: 'VeronIKA',
        maxPayGradePerStage: {
          sockeyeStation: {
            title: 'eggsecutiveVP',
            point: 999,
          },
          goneFissionHydroplant: {
            title: 'profreshionalPartTimer',
            point: 100,
          },
          spawningGrounds: {
            title: 'eggsecutiveVP',
            point: 0,
          },
          maroonersBay: {
            title: 'profreshionalPartTimer',
            point: 0,
          },
        },
        biography: 'よろしくおねがいします',
      } satisfies UpdateResumeSchema).success
    ).toBe(true);
  });

  it('invalid resume', () => {
    testFieldErrors(
      updateResumeSchema.safeParse({
        name: '',
        maxPayGradePerStage: {},
        biography: '',
      } satisfies UpdateResumeSchema),
      {
        name: ['名前を入力してください'],
      }
    );

    testFieldErrors(
      updateResumeSchema.safeParse({
        name: 'a'.repeat(11),
        maxPayGradePerStage: {},
        biography: 'a'.repeat(101),
      } satisfies UpdateResumeSchema),
      {
        name: ['名前は10文字以内で入力してください'],
        biography: ['自己紹介は100文字以内で入力してください'],
      }
    );

    testFieldErrors(
      updateResumeSchema.safeParse({
        name: 'VeronIKA',
        maxPayGradePerStage: {
          goneFissionHydroplant: {
            title: 'apprentice',
            point: 0.1,
          },
          sockeyeStation: {
            title: 'apprentice',
            point: -10,
          },
        },
        biography: '',
      } satisfies UpdateResumeSchema),
      {
        maxPayGradePerStage: [
          '評価は整数で入力してください',
          '評価は0〜999の間で入力してください',
        ],
      }
    );

    testFieldErrors(
      updateResumeSchema.safeParse({
        name: 'VeronIKA',
        maxPayGradePerStage: {
          goneFissionHydroplant: {
            title: 'apprentice',
            point: 101,
          },
          sockeyeStation: {
            title: 'eggsecutiveVP',
            point: 1000,
          },
        },
        biography: '',
      } satisfies UpdateResumeSchema),
      {
        maxPayGradePerStage: [
          '評価は0〜100の間で入力してください',
          '評価は0〜999の間で入力してください',
        ],
      }
    );
  });
});

function testFieldErrors<Input, Output>(
  result: SafeParseReturnType<Input, Output>,
  actual: typeToFlattenedError<Input>['fieldErrors']
) {
  assertSafeParseError(result);

  expect(result.error.flatten().fieldErrors).toStrictEqual(actual);
}

function assertSafeParseError<Input, Output>(
  result: SafeParseReturnType<Input, Output>
): asserts result is SafeParseError<Input> {
  expect(result.success).toBe(false);
}
