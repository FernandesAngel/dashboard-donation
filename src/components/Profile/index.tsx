import { FiLogOut } from 'react-icons/fi';
import { useCallback } from 'react';
import * as S from './styles';

import { EditButton } from '../EditButton';
import { useAuth } from '../../hooks/auth';

export function Profile(): JSX.Element {
  const { signOut, user } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  console.log(user);

  return (
    <S.Container>
      <S.Avatar src={user.avatarUrl} />
      <p>{user.name}</p>
      <EditButton url="/profile" />
      <S.LogoutButton to="/" onClick={handleSignOut}>
        <FiLogOut size={24} />
      </S.LogoutButton>
    </S.Container>
  );
}
