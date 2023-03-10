import { findMaxPayGrade } from '@/lib/models/max-pay-grade-per-stage';
import { Resume } from '@/lib/models/resume';
import { getDisplayStage, stages } from '@/lib/models/stage';
import { chunk } from '@/lib/utils/chunk';
import OgImageCard from './og-image-card';
import OgImageFormattedPayGrade from './og-image-formatted-pay-grade';
import OgImageLabel from './og-image-label';
import OgImageResumeAvatar from './og-image-resume-avatar';
import OgImageResumeUpdatedAt from './og-image-resume-updated-at';

interface Props {
  resume: Resume;
}

export default function OgImageResumeCard({ resume }: Props) {
  const maxPayGrade = findMaxPayGrade(resume.maxPayGradePerStage);

  return (
    <OgImageCard tw="w-[1024px]">
      {/* 最終更新日 */}
      <OgImageResumeUpdatedAt tw="self-end" updatedAt={resume.updatedAt} />

      {/* 名前、最高評価、アバター */}
      <div tw="mt-4 flex">
        <div tw="flex flex-col flex-1" style={{ gap: '0.5rem' }}>
          {/* 名前 */}
          <div tw="flex flex-col">
            <OgImageLabel>名前</OgImageLabel>
            <div tw="text-xl">{resume.name}</div>
          </div>

          {/* 最高評価 */}
          <div tw="flex flex-col">
            <OgImageLabel>最高評価</OgImageLabel>
            <div tw="flex text-xl">
              <OgImageFormattedPayGrade payGrade={maxPayGrade} />
            </div>
          </div>
        </div>

        {/* アバター */}
        <OgImageResumeAvatar avatar={resume.avatar} />
      </div>

      {/* ステージごとの最高評価 */}
      <div tw="flex mt-8">
        <div
          tw="flex flex-col w-full"
          style={{
            gap: '1rem',
          }}
        >
          {chunk(stages, 2).map((stages, i) => (
            <div key={i} tw="flex">
              {stages.map((stage) => (
                <div tw="flex-1 flex flex-col" key={stage}>
                  <OgImageLabel>{getDisplayStage(stage)}</OgImageLabel>
                  <div tw="flex">
                    <OgImageFormattedPayGrade
                      payGrade={resume.maxPayGradePerStage[stage]}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 自己紹介 */}
      <div tw="flex flex-col mt-8">
        <OgImageLabel>自己紹介</OgImageLabel>
        <div
          style={{
            whiteSpace: 'pre-wrap',
          }}
        >
          {resume.biography}
        </div>
      </div>
    </OgImageCard>
  );
}
