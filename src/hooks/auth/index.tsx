import React, { createContext, useCallback, useContext, useState } from 'react';
import { useToast } from '../toast';
import { api } from '../../services/api';
import { AuthContextData, AuthState, UpdateUser, User } from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const [data, setData] = useState<AuthState>(() => {
    const jwtToken = localStorage.getItem('@Donation:token');
    const user = localStorage.getItem('@Donation:user');

    if (jwtToken && user) {
      api.defaults.headers.authorization = `Bearer ${jwtToken}`;

      return { jwtToken, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async credentials => {
      try {
        setLoading(true);
        const response = await api.post('users/signin', credentials);

        const { email, name, jwtToken, _id, avatarUrl } = response.data;

        localStorage.setItem('@Donation:token', jwtToken);
        localStorage.setItem(
          '@Donation:user',
          JSON.stringify({ name, email, _id, avatarUrl }),
        );

        api.defaults.headers.authorization = `Bearer ${jwtToken}`;

        setData({ jwtToken, user: { name, email, _id, avatarUrl } });
        setLoading(false);
      } catch (error) {
        addToast('E-mail ou senha incorretos', 'alert');
        setLoading(false);
      }
    },
    [addToast],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Donation:token');
    localStorage.removeItem('@Donation:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (dataUser: UpdateUser) => {
      try {
        setLoadingImage(true);
        const response = await api.patch(`users`, dataUser);
        setData(state => {
          return {
            ...state,
            user: { ...state.user, name: response.data.name },
          };
        });
        const dataUserStorage = {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
        };
        localStorage.setItem('@Donation:user', JSON.stringify(dataUserStorage));
        setLoadingImage(false);
        addToast('Usuário atualizado com sucesso', 'success');
      } catch (error) {
        addToast('Erro ao atualizar usuário', 'error');
        setLoadingImage(false);
      }
    },
    [addToast],
  );

  const updateAvatar = useCallback(
    async (avatar: any) => {
      try {
        setLoading(true);
        const dataImage = new FormData();
        dataImage.append('avatar', avatar);

        const response = await api.post('/users/avatar', dataImage);
        console.log('data', response.data);
        setData(state => {
          return {
            ...state,
            user: { ...state.user, avatarUrl: response.data.avatarUrl },
          };
        });
        const dataUserStorage = {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          avatarUrl: response.data.avatarUrl,
        };
        localStorage.setItem('@Donation:user', JSON.stringify(dataUserStorage));
        setLoading(false);
        addToast('Usuário atualizado com sucesso', 'success');
      } catch (error) {
        console.log('erro', error);
        addToast('Erro ao atualizar avatar', 'error');
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
        loading,
        loadingImage,
        updateAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
