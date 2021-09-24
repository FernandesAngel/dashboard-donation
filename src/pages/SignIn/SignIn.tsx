import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <h1>Login</h1>
        <Input label="E-mail" />
        <Input label="Senha" />
        <Button title="Entrar" load={false} />
      </S.Form>
    </S.Container>
  );
};
export default SignIn;
