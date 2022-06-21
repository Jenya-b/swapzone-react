import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.width}px;
  padding: 0 20px;
  height: 100%;
  margin: 0 auto;
`;

export const Main = styled.main`
  grid-area: main;
`;
