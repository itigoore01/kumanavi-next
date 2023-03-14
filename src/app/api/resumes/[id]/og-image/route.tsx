import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';
import { Resume } from '@/lib/models/resume';
import OgImageResumeCard from './og-image-resume-card';

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  const resume: Resume = {
    id: '1',
    name: 'いか１２３４５６７８',
    avatar: null,
    maxPayGradePerStage: {
      sockeyeStation: { title: 'eggsecutiveVP', point: 40 },
    },
    biography: `あいうえお。
かきくけこ。`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-slate-900 text-base text-slate-50">
        <OgImageResumeCard resume={resume} />
      </div>
    )
  );
}

export const runtime = 'edge';
