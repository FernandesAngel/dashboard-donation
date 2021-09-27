import * as S from './styles';

import ProfileImg from '../../assets/img1.jpeg';
import { EditButton } from '../EditButton';

export function Profile(): JSX.Element {
  return (
    <S.Container>
      <S.Avatar src={ProfileImg} />
      <p>Angel Fernandes</p>
      <EditButton url="/profile" />
    </S.Container>
  );
}
