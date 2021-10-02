import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCallback } from 'react';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Template } from '../../components/Template';
import { TextArea } from '../../components/TextArea';
import { Title } from '../../components/Title';
import * as S from './styles';
import { useProject } from '../../hooks/project';

type ProjectFormData = {
  name: string;
  description: string;
};

const schemaProject = yup.object({
  name: yup.string().required('Título Obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

const CreateProject: React.FC = () => {
  const { createProject, loading } = useProject();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProject),
  });
  const handleCreateProject = useCallback(
    async (project: ProjectFormData) => {
      await createProject(project);
    },
    [createProject],
  );

  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="NOVO PROJETO" />
        </S.HeaderPage>
        <S.Form onSubmit={handleSubmit(handleCreateProject)}>
          <Input
            label="Título do Projeto"
            {...register('name')}
            errorMessage={errors.name?.message}
          />
          <TextArea
            label="Descrição"
            {...register('description')}
            errorMessage={errors.description?.message}
          />
          <Button type="submit" title="Criar Projeto" load={loading} />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default CreateProject;
