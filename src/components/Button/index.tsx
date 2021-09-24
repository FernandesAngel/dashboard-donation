import { ButtonHTMLAttributes } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  title: string;
  load?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, load, small = false }) => {
  return (
    <S.Container type="submit" disabled={load} small={small}>
      {load ? <ImSpinner8 size={20} /> : title}
    </S.Container>
  );
};

export default Button;
