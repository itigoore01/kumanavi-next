import ResumeCard from '@/components/resume/resume-card';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ResumeCard> = {
  title: 'Components/Resume/ResumeCard',
  component: ResumeCard,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    resume: {
      id: '1',
      avatar: null,
      name: 'VeronIKA',
      maxPayGradePerStage: {
        goneFissionHydroplant: {
          title: 'eggsecutiveVP',
          point: 999,
        },
        maroonersBay: {
          title: 'eggsecutiveVP',
          point: 400,
        },
        sockeyeStation: {
          title: 'profreshionalPartTimer',
          point: 80,
        },
      },
      biography: 'よろしくおねがいします',
      createdAt: new Date('2023-03-07T11:22:33.444+09:00').toISOString(),
      updatedAt: new Date('2023-03-07T11:22:33.444+09:00').toISOString(),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ResumeCard>;

export const Default: Story = {};
