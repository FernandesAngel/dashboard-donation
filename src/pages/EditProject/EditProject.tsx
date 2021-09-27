import Button from '../../components/Button';
import Input from '../../components/Input';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import * as S from './styles';

const EditProject: React.FC = () => {
  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="EDITAR PROJETO" />
        </S.HeaderPage>
        <S.Form>
          <Input label="Título do Projeto" />
          <Input label="Descrição do Projeto" />
          <Input label="Imagem?" />
          <Button title="Salvar Alterações" />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default EditProject;
