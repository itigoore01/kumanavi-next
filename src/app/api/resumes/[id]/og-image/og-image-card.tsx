import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

export default function OgImageCard({ children, tw, ...props }: Props) {
  return (
    <div
      {...props}
      tw={clsx(tw, 'flex flex-col rounded-lg bg-orange-600 p-5 font-black')}
    >
      {children}
    </div>
  );
}
