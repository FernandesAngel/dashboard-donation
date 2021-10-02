export interface SignInCredencials {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;

  avatar?: string;
  avatarUrl: string;
}
export interface UpdateUser {
  name: string;
}

export interface AuthState {
  jwtToken: string;
  user: User;
}

export interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: UpdateUser): Promise<void>;
  loading: boolean;
  loadingImage: boolean;

  updateAvatar(avatar: any): Promise<void>;
}
