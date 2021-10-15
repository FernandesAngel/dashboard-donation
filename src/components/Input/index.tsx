import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import ErrorMessage from '../ErrorMessage';
import { InputProps } from './interface';
import { Container } from './styles';

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
