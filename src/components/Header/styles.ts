import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  min-height: 70px;
  background-color: ${shade(0.2, '#181b23')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  height: 50px;
`;
