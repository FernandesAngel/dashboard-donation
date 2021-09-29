import { formatCurrency } from '../../utils/formatCurrency';
import { dateFormat } from '../../utils/formatDatePT';
import * as S from './styles';

interface DonationCardProps {
  method: string;
  price: number;
  date: string;
}
export function DonationCard({
  date,
  price,
  method,
}: DonationCardProps): JSX.Element {
  return (
    <S.Container>
      <div>
        <p>{method}</p>
      </div>
      <div>
        <p className="price">{formatCurrency(price)}</p>
      </div>
      <div>
        <p>{dateFormat(date)}h</p>
      </div>
    </S.Container>
  );
}
