import React from 'react';
import type { Preview } from '@storybook/react';
import { slate, orange } from 'tailwindcss/colors';
import '@/app/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: slate[50] },
        { name: 'dark', value: slate[900] },
        { name: 'card', value: orange[600] },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
        }}
        className={`break-words font-sans text-base text-slate-50 antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
