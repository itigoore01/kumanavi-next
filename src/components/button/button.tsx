import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(
        className,
        'rounded bg-zinc-800 px-8 py-2 hover:bg-zinc-700 focus:bg-zinc-700 focus:outline focus:outline-2 focus:outline-yellow-300 disabled:bg-zinc-600 disabled:text-secondary'
      )}
    >
      {children}
    </button>
  );
});

export default Button;
