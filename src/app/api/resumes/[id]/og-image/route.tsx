import { NextRequest } from 'next/server';
import { ImageResponse } from '@vercel/og';
import { Resume } from '@/lib/models/resume';
import OgImageResumeCard from './og-image-resume-card';

interface Props {
  params: {
    id: string;
  };
}

const NotoSansJP = (async () => {
  const response = await fetch(
    new URL('./NotoSansJP-Black.otf', import.meta.url)
  );
  return await response.arrayBuffer();
})();

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
    ),
    {
      fonts: [
        {
          name: 'NotoSansJP',
          data: await NotoSansJP,
          style: 'normal',
          weight: 900,
        },
      ],
    }
  );
}

export const runtime = 'edge';
