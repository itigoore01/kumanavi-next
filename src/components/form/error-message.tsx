import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'>;

const ErrorMessage = forwardRef<HTMLDivElement, Props>(function ErrorMessage(
  { children, className, role = 'alert', ...props },
  ref
) {
  if (!children) {
    return <></>;
  }

  return (
    <div
      ref={ref}
      {...props}
      role={role}
      className={clsx(className, 'mt-1 text-xs')}
    >
      {children}
    </div>
  );
});

export default ErrorMessage;
