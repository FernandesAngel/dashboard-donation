import * as S from './styles';

import noImg from '../../assets/noimage.png';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProjectHeaderProps {
  title: string;
  image: string;
  total: number;
  qtd: number;
}

export function ProjectHeader({
  image,
  title,
  qtd,
  total,
}: ProjectHeaderProps): JSX.Element {
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
            <p>{formatCurrency(total)}</p>
            <h2>Total</h2>
          </S.InsightBox>
        </S.Insights>
      </S.Content>
    </S.Container>
  );
}
