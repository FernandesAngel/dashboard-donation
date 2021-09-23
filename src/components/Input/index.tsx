import React, { InputHTMLAttributes } from 'react';
import ErrorMessage from '../ErrorMessage';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, errorMessage, ...rest }) => {
  return (
    <Container>
      <input {...rest} placeholder={label} />
      <ErrorMessage message={errorMessage} />
    </Container>
  );
};

export default Input;
