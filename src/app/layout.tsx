import { pageTitle } from '@/lib/metadata/page-title';
import clsx from 'clsx';
import { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import AppProviders from './app-providers';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  weight: ['900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  subsets: [],
});

export const metadata: Metadata = {
  title: pageTitle(),
  description: 'クマナビNext',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body
        className={clsx(
          notoSansJP.variable,
          'break-words bg-slate-900 font-sans text-base text-slate-50 antialiased'
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
