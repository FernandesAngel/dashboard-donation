import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import ErrorMessage from '../ErrorMessage';
import { TextAreaProps } from './interface';
import { Container } from './styles';

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ label, errorMessage, ...rest }: TextAreaProps, ref) => {
  return (
    <Container>
      <textarea {...rest} placeholder={label} rows={10} ref={ref} />
      <ErrorMessage message={errorMessage} />
    </Container>
  );
};

export const TextArea = forwardRef(TextAreaBase);
