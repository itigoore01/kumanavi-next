'use client';

import { UpdateResumeSchema } from '@/lib/models/resume';
import { getDisplayStage, Stage } from '@/lib/models/stage';
import { capitalize } from '@/lib/utils/capitalize';
import { useMemo } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import ErrorMessage from '../form/error-message';
import Input from '../form/input';
import Label from '../label/label';
import TitleSelect from './title-select';

interface Props {
  stage: Stage;
  register: UseFormRegister<UpdateResumeSchema>;
  errors: NonNullable<
    FieldErrors<UpdateResumeSchema>['maxPayGradePerStage']
  >[Stage];
}

export default function ResumeMaxPayGradeForm({
  stage,
  register,
  errors,
}: Props) {
  const displayStage = useMemo(() => getDisplayStage(stage), [stage]);
  const capitalizedStage = useMemo(() => capitalize(stage), [stage]);

  return (
    <div>
      <Label htmlFor={`resumeFormTitleFor${capitalizedStage}`}>
        {displayStage}の最高評価
      </Label>

      <div className="grid items-start gap-4 @sm:grid-cols-2">
        <div>
          <TitleSelect
            id={`resumeFormTitleFor${capitalizedStage}`}
            className="w-full"
            aria-invalid={errors?.title != null}
            aria-errormessage={`resumeFormTitleFor${capitalizedStage}Error`}
            {...register(`maxPayGradePerStage.${stage}.title`, {
              deps: [`maxPayGradePerStage.${stage}.point`],
            })}
          />
          <ErrorMessage id={`resumeFormTitleFor${capitalizedStage}Error`}>
            {errors?.title?.message}
          </ErrorMessage>
        </div>

        <div>
          <Input
            type="number"
            className="w-full"
            aria-invalid={errors?.point != null}
            aria-errormessage={`resumeFormPointFor${capitalizedStage}Error`}
            {...register(`maxPayGradePerStage.${stage}.point`)}
          />
          <ErrorMessage id={`resumeFormPointFor${capitalizedStage}Error`}>
            {errors?.point?.message}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}
