import { notFound } from 'next/navigation';
import ResumeCard from '@/components/resume/resume-card';
import { getResume } from '@/lib/api-client/resume';
import { Metadata } from 'next';
import { pageTitle } from '@/lib/metadata/page-title';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resume = await getResume(params.id);

  if (resume === null) {
    return {};
  }

  return {
    title: pageTitle(`${resume.name}さんの履歴書`),
  };
}

export default async function ResumePage({ params }: Props) {
  const resume = await getResume(params.id);

  if (resume === null) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="m-5">
        <ResumeCard resume={resume} />
      </div>
    </div>
  );
}
