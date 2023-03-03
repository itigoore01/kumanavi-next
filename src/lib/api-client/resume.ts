import { Resume, UpdateResumeSchema } from '@/lib/models/resume';

const mockResumes: Resume[] = [
  {
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
  },
  {
    id: '2',
    name: 'いか１２３４５６７８',
    avatar: null,
    maxPayGradePerStage: {
      sockeyeStation: { title: 'eggsecutiveVP', point: 40 },
    },
    biography: `あいうえお。
かきくけこ。`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function getResume(id: Resume['id']): Promise<Resume | null> {
  return await Promise.resolve(
    mockResumes.find((resume) => resume.id === id) ?? null
  );
}

export async function upsertResume(
  resume: UpdateResumeSchema,
  id?: Resume['id']
): Promise<Resume> {
  await Promise.resolve();

  const existsResumeIndex = id
    ? mockResumes.findIndex((resume) => resume.id === id)
    : -1;

  if (existsResumeIndex !== -1) {
    mockResumes[existsResumeIndex] = {
      ...structuredClone(mockResumes[existsResumeIndex]),
      ...resume,
      updatedAt: new Date().toISOString(),
    };
  }

  const newResume: Resume = {
    id: '2',
    avatar: null,
    ...resume,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  mockResumes.push(newResume);

  return newResume;
}
