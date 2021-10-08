import { useMemo } from 'react';
import { currencyMask, padLeadingZeros } from '../../utils/formatCurrency';
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
  const priceFormatted = useMemo(() => {
    if (String(price).length > 2) {
      return currencyMask(price);
    }
    if (String(price).length === 2) {
      return currencyMask(padLeadingZeros(price, 4));
    }
    return currencyMask(padLeadingZeros(price, 5));
  }, [price]);
  return (
    <S.Container>
      <div>
        <p>{method}</p>
      </div>
      <div>
        <p className="price">{priceFormatted}</p>
      </div>
      <div>
        <p>{dateFormat(date)}h</p>
      </div>
    </S.Container>
  );
}
