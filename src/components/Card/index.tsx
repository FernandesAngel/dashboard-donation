import Button from '../Button';
import { EditButton } from '../EditButton';
import { Title } from '../Title';
import * as S from './styles';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
export function Card({ title, description, imageUrl }: CardProps): JSX.Element {
  return (
    <S.Container>
      <S.TitleContent>
        <Title label={title} />
        <EditButton url="/" />
      </S.TitleContent>
      <S.CardImage src={imageUrl} />
      <p>{description}</p>
      <S.ButtonContainer>
        <Button title="Ver Doações" small />
      </S.ButtonContainer>
    </S.Container>
  );
}
