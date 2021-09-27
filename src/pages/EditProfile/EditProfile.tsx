import { FiCamera } from 'react-icons/fi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import ProfileImg from '../../assets/img1.jpeg';
import * as S from './styles';

const EditProfile: React.FC = () => {
  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="Perfil" />
        </S.HeaderPage>
        <S.Form>
          <S.AvatarContent>
            <S.AvatarInput>
              <img src={ProfileImg} alt="Profile" />
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" />
              </label>
            </S.AvatarInput>
          </S.AvatarContent>
          <Input label="Nome" />
          <Input label="Email" />
          <Input label="Nova Senha" />
          <Input label="Confirmar senha" />
          <Button title="Salvar Alterações" />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default EditProfile;
