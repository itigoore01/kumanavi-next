'use client';

import {
  Resume,
  UpdateResumeSchema,
  updateResumeSchema,
} from '@/lib/models/resume';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { stages } from '@/lib/models/stage';
import Input from '../form/input';
import Textarea from '../form/textarea';
import { MaxPayGradePerStage } from '@/lib/models/max-pay-grade-per-stage';
import Label from '../label/label';
import Button from '../button/button';
import { upsertResume } from '@/lib/api-client/resume';
import { useRouter } from 'next/navigation';
import ErrorMessage from '../form/error-message';
import ResumeMaxPayGradeForm from './resume-max-pay-grade-form';

interface Props {
  defaultValue?: Resume | null;
}

const formDefaultValues: UpdateResumeSchema = {
  name: '',
  biography: '',
  maxPayGradePerStage: stages.reduce<MaxPayGradePerStage>((result, stage) => {
    result[stage] = {
      title: 'apprentice',
      point: 40,
    };

    return result;
  }, {}),
};

export default function ResumeForm({ defaultValue: defaultValueProp }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<UpdateResumeSchema>({
    resolver: zodResolver(updateResumeSchema),
    mode: 'onTouched',
    defaultValues: useMemo(() => {
      const parseResult = updateResumeSchema.safeParse(defaultValueProp);

      return parseResult.success
        ? {
            ...parseResult.data,
            maxPayGradePerStage: {
              ...formDefaultValues.maxPayGradePerStage,
              ...parseResult.data.maxPayGradePerStage,
            },
          }
        : formDefaultValues;
    }, [defaultValueProp]),
  });

  const onSubmit = async (data: UpdateResumeSchema) => {
    const resume = await upsertResume(data, defaultValueProp?.id);

    router.push(`/resumes/${resume.id}`);
  };

  return (
    <form className="grid gap-8 @container">
      <div className="grid">
        <Label htmlFor="resumeFormName">名前</Label>
        <Input
          id="resumeFormName"
          className="w-full"
          type="text"
          placeholder="VeronIKA"
          aria-invalid={errors.name != null}
          aria-errormessage="resumeFormNameError"
          {...register('name')}
        />
        <ErrorMessage id="resumeFormNameError">
          {errors.name?.message}
        </ErrorMessage>
      </div>

      <div>
        <ul className="grid gap-x-8 gap-y-4 @2xl:grid-cols-2">
          {stages.map((stage) => (
            <li key={stage}>
              <ResumeMaxPayGradeForm
                stage={stage}
                register={register}
                errors={errors.maxPayGradePerStage?.[stage]}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="grid">
        <Label htmlFor="resumeFormBiography">自己紹介</Label>
        <Textarea
          id="resumeFormBiography"
          rows={5}
          placeholder="イカした自己紹介を書こう"
          aria-invalid={errors.biography != null}
          aria-errormessage="resumeFormBiographyError"
          {...register('biography')}
        />
        <ErrorMessage id="resumeFormBiographyError">
          {errors.biography?.message}
        </ErrorMessage>
      </div>

      <div className="grid place-content-center">
        <Button
          type="button"
          disabled={isSubmitting || isSubmitSuccessful}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleSubmit(onSubmit)}
        >
          保存する
        </Button>
      </div>
    </form>
  );
}
