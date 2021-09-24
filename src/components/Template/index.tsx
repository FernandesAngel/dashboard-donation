import { ReactNode } from 'react';
import { Header } from '../Header';
import * as S from './styles';

interface TemplateProps {
  children: ReactNode;
}
export function Template({ children }: TemplateProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
