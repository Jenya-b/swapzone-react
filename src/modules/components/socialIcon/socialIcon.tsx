import styled from 'styled-components';
import { SocialIconType } from '../../types/types';

export const SocialIcon = ({ urlLink, urlImg }: SocialIconType) => (
  <SocialIconLink href={urlLink}>
    <SocialIconImg src={urlImg}></SocialIconImg>
  </SocialIconLink>
);

const SocialIconLink = styled.a`
  display: inline-block;
  width: 50px;
  height: 50px;
`;

const SocialIconImg = styled.img`
  width: 100%;
  height: 100%;
`;
