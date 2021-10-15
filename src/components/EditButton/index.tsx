import { FaPencilAlt } from 'react-icons/fa';
import { EditButtonProps } from './interface';
import * as S from './styles';

export function EditButton({ url }: EditButtonProps): JSX.Element {
  return (
    <S.ButtonLink to={url}>
      <FaPencilAlt size={14} />
    </S.ButtonLink>
  );
}
