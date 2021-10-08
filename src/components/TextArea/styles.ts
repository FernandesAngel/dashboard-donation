import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0;
  min-height: 70px;
  textarea {
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    border: 0;
    background-color: #181b23;
    border: 2px solid #181b23;
    color: #eeeef2;
    resize: none;
    :focus {
      border: 2px solid #6840dc;
    }
    :-webkit-autofill {
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
