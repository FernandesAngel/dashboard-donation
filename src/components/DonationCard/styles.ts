import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: #1f2029;
  border-radius: 6px;
  padding: 16px 60px;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;

  div {
    display: flex;
    width: 233px;
    justify-content: center;
    align-items: center;
  }

  .price {
    color: #5d9141;
  }
`;
