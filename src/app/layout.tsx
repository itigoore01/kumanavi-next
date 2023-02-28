import clsx from 'clsx';
import { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import './globals.css';

const mPlusRounded1c = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  variable: '--font-m-plus-rounded-1c',
  display: 'swap',
  subsets: [],
});

export const metadata: Metadata = {
  title: 'NextJS app boilerplate',
  description: 'NextJS app boilerplate',
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
          mPlusRounded1c.variable,
          'break-words bg-slate-900 font-sans text-base text-slate-50 antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
