import { getDisplayTitle, titles } from '@/lib/models/title';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import Select from '../form/select';

type Props = Omit<ComponentPropsWithoutRef<typeof Select>, 'children'>;

const TitleSelect = forwardRef<HTMLSelectElement, Props>(function TitleSelect(
  { ...props },
  ref
) {
  return (
    <Select ref={ref} {...props}>
      {titles.map((title) => (
        <option key={title} value={title}>
          {getDisplayTitle(title)}
        </option>
      ))}
    </Select>
  );
});

export default TitleSelect;
