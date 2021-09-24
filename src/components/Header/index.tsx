import * as S from './styles';
import { Profile } from '../Profile';
import LogoImg from '../../assets/logo.png';

export function Header(): JSX.Element {
  return (
    <S.Container>
      <S.Logo src={LogoImg} />
      <Profile />
    </S.Container>
  );
}
