import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'select'>;

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { children, className, ...props },
  ref
) {
  return (
    <select
      ref={ref}
      {...props}
      className={clsx(
        className,
        'block appearance-none rounded bg-form-control bg-select-chevron bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat py-2 pl-4 pr-10 hover:bg-form-control-focused focus:bg-form-control-focused focus:outline focus:outline-2 focus:outline-yellow-300 aria-invalid:outline aria-invalid:outline-2 aria-invalid:outline-form-control-invalid'
      )}
    >
      {children}
    </select>
  );
});

export default Select;
