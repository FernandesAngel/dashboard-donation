import * as S from './styles';

interface TitleProps {
  label: string;
}
export function Title({ label }: TitleProps): JSX.Element {
  return <S.Title>{label}</S.Title>;
}
