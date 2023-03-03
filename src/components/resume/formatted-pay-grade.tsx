import { PayGrade } from '@/lib/models/pay-grade';
import { getDisplayTitle } from '@/lib/models/title';

interface Props {
  payGrade?: PayGrade | null;
}

export default function FormattedPayGrade({ payGrade }: Props) {
  return (
    <>
      {payGrade ? `${getDisplayTitle(payGrade.title)} ${payGrade.point}` : '-'}
    </>
  );
}
