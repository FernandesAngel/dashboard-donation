import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  justify-content: stretch;
  img {
    border-radius: 6px;
    width: 230px;
    height: 190px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  width: 100%;
  padding: 16px 0;
  h1 {
    font-size: 24px;
    font-weight: 900;
  }
`;
export const Insights = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const InsightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #6840dc;
    font-weight: 900;
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
`;
