import { ButtonHTMLAttributes } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  load?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  load,
  small = false,
  ...rest
}) => {
  return (
    <S.Container disabled={load} small={small} {...rest}>
      {load ? <ImSpinner8 size={20} /> : title}
    </S.Container>
  );
};

export default Button;
