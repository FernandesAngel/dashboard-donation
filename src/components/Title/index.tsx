import { TitleProps } from './interface';
import * as S from './styles';

export function Title({ label }: TitleProps): JSX.Element {
  return <S.Title>{label}</S.Title>;
}
