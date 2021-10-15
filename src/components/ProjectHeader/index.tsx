import { useMemo } from 'react';
import * as S from './styles';

import noImg from '../../assets/noimage.png';
import { currencyMask, padLeadingZeros } from '../../utils/formatCurrency';
import { ProjectHeaderProps } from './interface';

export function ProjectHeader({
  image,
  title,
  qtd,
  total,
}: ProjectHeaderProps): JSX.Element {
  const totalFormatted = useMemo(() => {
    if (String(total).length > 2) {
      return currencyMask(total);
    }
    if (String(total).length === 2) {
      return currencyMask(padLeadingZeros(total, 4));
    }
    return currencyMask(padLeadingZeros(total, 5));
  }, [total]);
  return (
    <S.Container>
      <img src={image || noImg} alt="project" />
      <S.Content>
        <h1>{title}</h1>
        <S.Insights>
          <S.InsightBox>
            <p>{qtd}</p>
            <h2>Doações</h2>
          </S.InsightBox>
          <S.InsightBox>
            <p>{totalFormatted}</p>
            <h2>Total</h2>
          </S.InsightBox>
        </S.Insights>
      </S.Content>
    </S.Container>
  );
}
