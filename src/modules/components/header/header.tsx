import { NavLink } from 'react-router-dom';
import { Container } from '../../../styles/components';
import { HeaderWrapp, Logo, LogoImage, LogoText, NavMenu, StyledHeader } from './header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapp>
          <Logo>
            <LogoImage src="/logo.png" alt="" />
            <LogoText>Swapzone</LogoText>
          </Logo>
          <NavMenu>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
          </NavMenu>
        </HeaderWrapp>
      </Container>
    </StyledHeader>
  );
};
