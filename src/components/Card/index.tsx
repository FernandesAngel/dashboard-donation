import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import Switch from 'react-switch';
import Button from '../Button';
import { EditButton } from '../EditButton';
import { Title } from '../Title';
import * as S from './styles';
import noImg from '../../assets/noimage.png';
import { useProject } from '../../hooks/project';

interface CardProps {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: boolean;
}
export function Card({
  _id,
  title,
  description,
  imageUrl,
  status,
}: CardProps): JSX.Element {
  const history = useHistory();
  const { updateStatus } = useProject();

  const handleRedirectDonation = useCallback(() => {
    history.push(`donations/${_id}`);
  }, [history, _id]);

  const handleStatusProject = useCallback(async () => {
    await updateStatus(_id, { status: !status });
  }, [updateStatus, status, _id]);

  return (
    <S.Container>
      <S.HeaderCard>
        <S.TitleContent>
          <Title label={title} />
        </S.TitleContent>
        <EditButton url={`/projects/edit/${_id}`} />
      </S.HeaderCard>
      <S.Content>
        <S.ImageContainer>
          <S.CardImage src={imageUrl || noImg} />
          <S.ContainerSwitch>
            <Switch checked={status} onChange={handleStatusProject} />
          </S.ContainerSwitch>
        </S.ImageContainer>
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
