import Button from '../../components/Button';
import Input from '../../components/Input';
import { Template } from '../../components/Template';
import TextArea from '../../components/TextArea';
import { Title } from '../../components/Title';
import * as S from './styles';

const CreateProject: React.FC = () => {
  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="NOVO PROJETO" />
        </S.HeaderPage>
        <S.Form>
          <Input label="Título do Projeto" />
          <TextArea label="alo" />
          <Input label="Imagem?" />
          <Button title="Criar Projeto" />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default CreateProject;
