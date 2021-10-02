import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  min-height: 300px;
  background-color: #1f2029;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  flex: 1;
`;
export const TitleContent = styled.div`
  flex: 1;
  margin-right: 8px;
`;
export const ImageContainer = styled.div`
  position: relative;

  margin-bottom: 16px;
`;
export const ContainerSwitch = styled.div`
  padding: 5px;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 6px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
