import { FaPencilAlt } from 'react-icons/fa';
import * as S from './styles';

interface EditButtonProps {
  url: string;
}

export function EditButton({ url }: EditButtonProps): JSX.Element {
  return (
    <S.ButtonLink to={url}>
      <FaPencilAlt size={14} />
    </S.ButtonLink>
  );
}
