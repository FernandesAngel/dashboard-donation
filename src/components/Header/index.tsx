import { Link } from 'react-router-dom';
import * as S from './styles';
import { Profile } from '../Profile';
import LogoImg from '../../assets/logo.png';

export function Header(): JSX.Element {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={LogoImg} />
      </Link>
      <Profile />
    </S.Container>
  );
}
