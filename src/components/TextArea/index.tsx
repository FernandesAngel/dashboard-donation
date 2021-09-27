import React, { TextareaHTMLAttributes } from 'react';
import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMessage?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  errorMessage,
  ...rest
}) => {
  return (
    <Container>
      <textarea {...rest} placeholder={label} rows={10} />
      <ErrorMessage message={errorMessage} />
    </Container>
  );
};

export default TextArea;
