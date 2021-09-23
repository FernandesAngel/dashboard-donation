import Input from '../../components/Input';
import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <h1>Login</h1>
        <Input label="E-mail" errorMessage="uhu" />
        <Input label="Senha" />
      </S.Form>
    </S.Container>
  );
};
export default SignIn;
