import { Header } from '../Header';
import { TemplateProps } from './interface';

export function Template({ children }: TemplateProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
