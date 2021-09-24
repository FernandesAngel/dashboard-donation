import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: flex;
  border: 1px solid #6840dc;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  svg {
    color: #6840dc;
  }
  :hover {
    border-color: #eeeef2;
    svg {
      color: #eeeef2;
    }
  }
`;
