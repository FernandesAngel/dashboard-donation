import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../../services/api';
import { AuthContextData, AuthState, User } from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
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

  const signIn = useCallback(async credentials => {
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
      console.log('eerologin', error);
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Donation:token');
    localStorage.removeItem('@Donation:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@Donation:user', JSON.stringify(user));

      setData({
        jwtToken: data.jwtToken,
        user,
      });
    },
    [setData, data.jwtToken],
  );

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
