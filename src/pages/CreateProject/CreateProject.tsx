import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Template } from '../../components/Template';
import { TextArea } from '../../components/TextArea';
import { Title } from '../../components/Title';
import * as S from './styles';

type ProjectFormData = {
  title: string;
  description: string;
};

const schemaProject = yup.object({
  title: yup.string().required('Título Obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

const CreateProject: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProject),
  });
  const handleCreateProject: SubmitHandler<ProjectFormData> = async values => {
    console.log(values);
  };

  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="NOVO PROJETO" />
        </S.HeaderPage>
        <S.Form onSubmit={handleSubmit(handleCreateProject)}>
          <Input
            label="Título do Projeto"
            {...register('title')}
            errorMessage={errors.title?.message}
          />
          <TextArea
            label="Descrição"
            {...register('description')}
            errorMessage={errors.description?.message}
          />
          <Input label="Imagem?" />
          <Button title="Criar Projeto" />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default CreateProject;
