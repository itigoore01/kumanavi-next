import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<'textarea'>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { children, className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      {...props}
      className={clsx(
        className,
        'block rounded bg-form-control py-2 px-4 placeholder:text-placeholder hover:bg-form-control-focused focus:bg-form-control-focused focus:outline focus:outline-2 focus:outline-yellow-300 aria-invalid:outline aria-invalid:outline-2 aria-invalid:outline-form-control-invalid'
      )}
    >
      {children}
    </textarea>
  );
});

export default Textarea;
