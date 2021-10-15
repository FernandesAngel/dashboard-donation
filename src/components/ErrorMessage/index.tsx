import React from 'react';
import { ErrorMessageProps } from './interface';
import { Container } from './styles';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default ErrorMessage;
