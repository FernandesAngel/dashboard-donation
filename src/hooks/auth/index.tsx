import React, { createContext, useCallback, useContext, useState } from 'react';
import { useToast } from '../toast';
import { api } from '../../services/api';
import { AuthContextData, AuthState, UpdateUser, User } from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

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
        console.log(response.data);

        const { email, name, jwtToken, _id } = response.data;

        localStorage.setItem('@Donation:token', jwtToken);
        localStorage.setItem(
          '@Donation:user',
          JSON.stringify({ name, email, _id }),
        );

        api.defaults.headers.authorization = `Bearer ${jwtToken}`;

        setData({ jwtToken, user: { name, email, _id } });
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

  const updateUser = useCallback(async (id: string, dataUser: UpdateUser) => {
    try {
      setLoading(true);
      const response = await api.patch(`users/${id}`, dataUser);
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
      setLoading(false);
      addToast('Usuário atualizado com sucesso', 'success');
    } catch (error) {
      addToast('Erro ao atualizar usuário', 'error');
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
