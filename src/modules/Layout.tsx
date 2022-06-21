import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { socialIcon } from './constants/footer';

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer {...socialIcon} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  display: grid;
  grid-template: ${({ theme }) => theme.sizes.header.height}px 1fr ${({ theme }) =>
      theme.sizes.footer.height}px / 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;
