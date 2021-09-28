import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    margin: 0 16px;
  }
`;
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const LogoutButton = styled(Link)`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  margin-left: 16px;
  svg {
    color: #6840dc;
  }
`;
