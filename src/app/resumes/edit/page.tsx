import Card from '@/components/card/card';
import ResumeForm from '@/components/resume/resume-form';
import { getResume } from '@/lib/api-client/resume';
import { pageTitle } from '@/lib/metadata/page-title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: pageTitle('履歴書を編集'),
};

export default async function ResumeEditPage() {
  const resume = await getResume('3');

  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="m-5">
        <Card className="font-black">
          <ResumeForm defaultValue={resume} />
        </Card>
      </div>
    </div>
  );
}
