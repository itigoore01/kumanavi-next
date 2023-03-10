import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = {
  updatedAt: string;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export default function OgImageResumeUpdatedAt({
  updatedAt,
  tw,
  ...props
}: Props) {
  let formattedUpdatedAt: string;
  try {
    formattedUpdatedAt = new Intl.DateTimeFormat('ja-JP', {
      dateStyle: 'long',
    }).format(new Date(updatedAt));
  } catch (error) {
    return <></>;
  }

  return (
    <div
      {...props}
      tw={clsx(tw, 'flex text-xs text-white/70')}
      style={{
        gap: '0.5rem',
      }}
    >
      <span>{formattedUpdatedAt}</span>
      <span>現在</span>
    </div>
  );
}
