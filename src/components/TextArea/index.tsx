import React, {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react';
import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
}

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
