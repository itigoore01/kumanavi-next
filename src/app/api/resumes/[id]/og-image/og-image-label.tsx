import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

export default function OgImageLabel({ children, tw, ...props }: Props) {
  return (
    <div {...props} tw={clsx(tw, 'flex text-sm text-white/70')}>
      {children}
    </div>
  );
}
