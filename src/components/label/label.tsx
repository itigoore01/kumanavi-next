import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'label'>;

const Label = forwardRef<HTMLLabelElement, Props>(function Label(
  { children, className, ...props },
  ref
) {
  return (
    <label
      ref={ref}
      {...props}
      className={clsx(className, 'mb-1 block text-sm text-secondary')}
    >
      {children}
    </label>
  );
});

export default Label;
