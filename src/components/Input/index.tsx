import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorMessage, ...rest }: InputProps,
  ref,
) => {
  return (
    <Container>
      <input {...rest} placeholder={label} ref={ref} />
      <ErrorMessage message={errorMessage} />
    </Container>
  );
};

export const Input = forwardRef(InputBase);
