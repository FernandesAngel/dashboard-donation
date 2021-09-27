import * as S from './styles';

import ProfileImg from '../../assets/img1.jpeg';

export function ProjectHeader(): JSX.Element {
  return (
    <S.Container>
      <img src={ProfileImg} alt="project" />
      <S.Content>
        <h1>Título do projeto</h1>
        <S.Insights>
          <S.InsightBox>
            <p>230</p>
            <h2>Doações</h2>
          </S.InsightBox>
          <S.InsightBox>
            <p>R$3.000,00</p>
            <h2>Total</h2>
          </S.InsightBox>
        </S.Insights>
      </S.Content>
    </S.Container>
  );
}
