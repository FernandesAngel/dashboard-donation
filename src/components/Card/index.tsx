import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import Button from '../Button';
import { EditButton } from '../EditButton';
import { Title } from '../Title';
import * as S from './styles';
import noImg from '../../assets/noimage.png';

interface CardProps {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}
export function Card({
  _id,
  title,
  description,
  imageUrl,
}: CardProps): JSX.Element {
  const history = useHistory();
  const handleRedirectDonation = useCallback(() => {
    history.push(`donations/${_id}`);
  }, [history, _id]);

  return (
    <S.Container>
      <S.TitleContent>
        <Title label={title} />
        <EditButton url={`/projects/edit/${_id}`} />
      </S.TitleContent>
      <S.Content>
        <S.CardImage src={imageUrl || noImg} />
        <p>{description}</p>
      </S.Content>
      <S.ButtonContainer>
        <Button
          title="Ver Doações"
          small
          type="button"
          onClick={handleRedirectDonation}
        />
      </S.ButtonContainer>
    </S.Container>
  );
}
