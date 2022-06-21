import styled, { css } from 'styled-components';

const fontStyles = css`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
`;

export const StyledHeader = styled.header`
  grid-area: header;
`;

export const HeaderWrapp = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: ${({ theme }) => theme.sizes.logoHeader.width}px;
  height: ${({ theme }) => theme.sizes.logoHeader.height}px;
  background: ${({ theme }) => theme.colors.logo};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.logo};
`;

export const LogoText = styled.div`
  margin-left: 20px;
  background: linear-gradient(270deg, #889f6b 0%, #8ac2a4 50.67%, #6a98af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  ${fontStyles}
`;

export const NavMenu = styled.nav`
  display: flex;
  column-gap: 40px;

  a {
    color: ${({ theme }) => theme.colors.text};
    ${fontStyles}
  }
`;
