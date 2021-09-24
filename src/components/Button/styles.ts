import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export function rotationBuilder() {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
      opacity: .9
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
  return rotation;
}
interface ContainerProps {
  small: boolean;
}
export const Container = styled.button<ContainerProps>`
  background-color: #6840dc;
  color: #eeeef2;
  width: 100%;
  height: ${props => (props.small ? 30 : 40)}px;
  border-radius: 6px;
  padding: 10px;
  border: 0;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${shade(0.2, '#6840dc')};
  }
  svg {
    animation: ${rotationBuilder()} 1s linear infinite;
  }
`;
