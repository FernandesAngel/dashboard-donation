import React from 'react';
import { Container } from './styles';

interface ErrorMessageProps {
  message?: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default ErrorMessage;
