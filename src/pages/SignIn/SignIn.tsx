import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback } from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import * as S from './styles';
import { useAuth } from '../../hooks/auth';

type SignInFormData = {
  email: string;
  password: string;
};

const schemaSignIn = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignIn: React.FC = () => {
  const { signIn, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });
  // const handleSignIn: SubmitHandler<SignInFormData> = async values => {
  //   console.log(values);
  // };

  const handleSignIn = useCallback(
    async (credentials: SignInFormData) => {
      signIn(credentials);
    },
    [signIn],
  );

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Login</h1>
        {/* <input type="text" {...register('email')} />
        <input type="text" {...register('password')} /> */}
        <Input
          label="E-mail"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Input
          label="Senha"
          {...register('password')}
          errorMessage={errors.password?.message}
          type="password"
        />
        <Button type="submit" title="Entrar" load={loading} />
      </S.Form>
    </S.Container>
  );
};
export default SignIn;
