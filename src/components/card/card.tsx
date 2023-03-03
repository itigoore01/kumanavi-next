import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      {...props}
      className={clsx(className, 'rounded-lg bg-orange-600 p-5')}
    >
      {children}
    </div>
  );
});

export default Card;
