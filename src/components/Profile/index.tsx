import { FiLogOut } from 'react-icons/fi';
import { useCallback } from 'react';
import * as S from './styles';

import ProfileImg from '../../assets/img1.jpeg';
import { EditButton } from '../EditButton';
import { useAuth } from '../../hooks/auth';

export function Profile(): JSX.Element {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <S.Container>
      <S.Avatar src={ProfileImg} />
      <p>Angel Fernandes</p>
      <EditButton url="/profile" />
      <S.LogoutButton to="/" onClick={handleSignOut}>
        <FiLogOut size={24} />
      </S.LogoutButton>
    </S.Container>
  );
}
