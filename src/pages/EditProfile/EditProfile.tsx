import { FiCamera } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ChangeEvent, useCallback } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { Template } from '../../components/Template';
import { Title } from '../../components/Title';
import ProfileImg from '../../assets/img1.jpeg';
import * as S from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

type ProfileFormData = {
  name: string;
  email: string;
  newPassword: string;
  passwordConfirmation: string;
};

const schemaProfile = yup.object({
  name: yup.string(),
  email: yup.string().email('E-mail inválido'),
  newPassword: yup.string(),
});

const EditProfile: React.FC = () => {
  const { user, updateUser, loading, updateAvatar, loadingImage } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaProfile),
    defaultValues: {
      name: user.name,
    },
  });
  const handleEditProfile = useCallback(
    async dataUpdateUser => {
      await updateUser(dataUpdateUser);
    },
    [updateUser],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        await updateAvatar(e.target.files[0]);
      }
    },
    [updateAvatar],
  );

  return (
    <Template>
      <S.Container>
        <S.HeaderPage>
          <Title label="Perfil" />
        </S.HeaderPage>
        <S.Form onSubmit={handleSubmit(handleEditProfile)}>
          <S.AvatarContent>
            <S.AvatarInput>
              <img src={user.avatarUrl} alt="Profile" />
              {loadingImage ? (
                <S.ContainerLoad>
                  <ImSpinner8 size={20} className="rotate" />
                </S.ContainerLoad>
              ) : (
                <label htmlFor="avatar">
                  <FiCamera />
                  <input
                    type="file"
                    id="avatar"
                    onChange={handleAvatarChange}
                  />
                </label>
              )}
            </S.AvatarInput>
          </S.AvatarContent>
          <Input
            label="Nome"
            {...register('name')}
            errorMessage={errors.name?.message}
          />
          <Button type="submit" title="Salvar Alterações" load={loading} />
        </S.Form>
      </S.Container>
    </Template>
  );
};

export default EditProfile;
