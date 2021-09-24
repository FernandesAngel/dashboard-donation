import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  min-height: 300px;
  background-color: #1f2029;
  border-radius: 6px;
  padding: 16px;
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px;
  margin-bottom: 16px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
