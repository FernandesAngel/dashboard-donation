import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiCamera } from 'react-icons/fi';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Template } from '../../components/Template';
import { TextArea } from '../../components/TextArea';
import { Title } from '../../components/Title';
import * as S from './styles';
import ProfileImg from '../../assets/img1.jpeg';

type ProjectFormData = {
  title: string;
  description: string;
};

const schemaEditProject = yup.object({
  title: yup.string().required('Título obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

const EditProject: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEditProject),
  });
  const handleEditProject: SubmitHandler<ProjectFormData> = async values => {
    console.log(values);
  };

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
            {...register('title')}
            errorMessage={errors.title?.message}
          />
          <TextArea
            label="Descrição"
            {...register('description')}
            errorMessage={errors.description?.message}
          />
          <Input label="Imagem?" />
          <Button title="Salvar Alterações" />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default EditProject;
