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
        <p className="price">R${price}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
    </S.Container>
  );
}
