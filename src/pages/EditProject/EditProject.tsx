import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiCamera } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useToast } from '../../hooks/toast';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Template } from '../../components/Template';
import { TextArea } from '../../components/TextArea';
import { Title } from '../../components/Title';
import * as S from './styles';
import ProfileImg from '../../assets/img1.jpeg';
import { useProject } from '../../hooks/project';

type ProjectFormData = {
  name: string;
  description: string;
};

const schemaEditProject = yup.object({
  name: yup.string().required('Título obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

const EditProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, updateProject, loading } = useProject();
  const { addToast } = useToast();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEditProject),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  useEffect(() => {
    const findProject = data.find(p => p._id === id);
    if (!findProject) {
      addToast('Projeto não encontrado', 'alert');
      history.push('/projects');
    } else {
      setValue('name', findProject.name);
      setValue('description', findProject.description);
    }
  }, [data, id, addToast, history, setValue]);

  const handleEditProject = useCallback(
    async (projectUpdate: ProjectFormData) => {
      await updateProject(id, projectUpdate);
    },
    [id, updateProject],
  );

  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="EDITAR PROJETO" />
        </S.HeaderPage>
        <S.Form onSubmit={handleSubmit(handleEditProject)}>
          <S.AvatarContent>
            <S.AvatarInput>
              <img src={ProfileImg} alt="Profile" />
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" />
              </label>
            </S.AvatarInput>
          </S.AvatarContent>
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
          <Input label="Imagem?" />
          <Button type="submit" title="Salvar Alterações" load={loading} />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default EditProject;
