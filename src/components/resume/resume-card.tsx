import { findMaxPayGrade } from '@/lib/models/max-pay-grade-per-stage';
import { Resume as ResumeModel } from '@/lib/models/resume';
import { getDisplayStage, stages } from '@/lib/models/stage';
import { capitalize } from '@/lib/utils/capitalize';
import { useMemo } from 'react';
import Card from '../card/card';
import Label from '../label/label';
import FormattedPayGrade from './formatted-pay-grade';
import ResumeAvatar from './resume-avatar';
import ResumeUpdatedAt from './resume-updated-at';

interface Props {
  resume: ResumeModel;
}

export default function ResumeCard({ resume }: Props) {
  const maxPayGrade = useMemo(
    () => findMaxPayGrade(resume.maxPayGradePerStage),
    [resume.maxPayGradePerStage]
  );

  return (
    <Card className="font-black">
      {/* 最終更新日 */}
      <ResumeUpdatedAt className="text-right" updatedAt={resume.updatedAt} />

      {/* 名前、最高評価、アバター */}
      <div className="mt-4 flex">
        <div className="flex-1 space-y-2">
          {/* 名前 */}
          <div>
            <Label id="resumeName">名前</Label>
            <div aria-labelledby="resumeName" className="text-xl">
              {resume.name}
            </div>
          </div>

          {/* 最高評価 */}
          <div>
            <Label id="resumeMaxPayGrade">最高評価</Label>
            <div aria-labelledby="resumeMaxPayGrade" className="text-xl">
              <FormattedPayGrade payGrade={maxPayGrade} />
            </div>
          </div>
        </div>

        {/* アバター */}
        <ResumeAvatar avatar={resume.avatar} />
      </div>

      {/* ステージごとの最高評価 */}
      <div className="mt-8">
        <ul className="grid grid-cols-2 gap-2">
          {stages.map((stage) => (
            <li key={stage}>
              <Label id={`resumeMaxPayGradeFor${capitalize(stage)}`}>
                {getDisplayStage(stage)}
              </Label>
              <div aria-label={`resumeMaxPayGradeFor${capitalize(stage)}`}>
                <FormattedPayGrade
                  payGrade={resume.maxPayGradePerStage[stage]}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 自己紹介 */}
      <div className="mt-8">
        <Label>自己紹介</Label>
        <p className="whitespace-pre-wrap">{resume.biography}</p>
      </div>
    </Card>
  );
}
