import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`;
export const Form = styled.form`
  width: 100%;
  background-color: #1f2029;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 6px;

  button {
    width: 300px;
    margin: 0 auto;
  }
`;

export const HeaderPage = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
export const AvatarContent = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 220px;
    height: 160px;
    border-radius: 6px;
  }
  label {
    position: absolute;
    width: 50px;
    height: 50px;
    background: #6840dc;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
    &:hover {
      background: ${shade(0.2, '#6840dc')};
    }
  }
`;

export const ContainerLoad = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: #6840dc;
  border-radius: 50%;
  right: 0;
  bottom: 0;
  border: 0;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentButton = styled.div``;
