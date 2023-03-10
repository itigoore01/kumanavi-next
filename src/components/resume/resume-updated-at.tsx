import clsx from 'clsx';
import { ComponentPropsWithoutRef, useMemo } from 'react';

type Props = {
  updatedAt: string;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

export default function ResumeUpdatedAt({
  updatedAt,
  className,
  ...props
}: Props) {
  const formattedUpdatedAt = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('ja-JP', {
        dateStyle: 'long',
      }).format(new Date(updatedAt));
    } catch (error) {
      return null;
    }
  }, [updatedAt]);

  if (formattedUpdatedAt === null) {
    return <></>;
  }

  return (
    <div
      {...props}
      className={clsx(className, 'space-x-2 text-xs text-secondary')}
      aria-label="最終更新日"
    >
      <span>{formattedUpdatedAt}</span>
      <span>現在</span>
    </div>
  );
}
