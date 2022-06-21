import styled from 'styled-components';
import { Container } from '../../../styles/components';
import { SocialIconType } from '../../types/types';
import { SocialIcon } from '../socialIcon/socialIcon';

export const Footer = (socialIcon: SocialIconType[]) => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapp>
          <SocialMenu>
            {Object.values(socialIcon).map(({ title, ...url }) => (
              <SocialIcon key={title} {...url} />
            ))}
          </SocialMenu>
        </FooterWrapp>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  grid-area: footer;
`;

const FooterWrapp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialMenu = styled.div`
  display: flex;
  column-gap: 30px;
`;
