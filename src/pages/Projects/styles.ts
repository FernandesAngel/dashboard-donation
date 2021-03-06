import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const HeaderPage = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Action = styled.div`
  width: 80px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
`;
