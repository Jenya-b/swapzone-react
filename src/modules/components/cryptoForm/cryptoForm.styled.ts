import Box from '@mui/material/Box';
import styled from 'styled-components';

export const StyledCryptoForm = styled(Box)`
  background: radial-gradient(
      341.67% 341.67% at -331.25% -84.38%,
      rgba(68, 102, 108, 0.259) 84.19%,
      rgba(71, 144, 158, 0) 100%
    ),
    linear-gradient(148.21deg, rgba(109, 118, 120, 0.8) -18.17%, rgba(0, 0, 0, 0) 89.54%),
    radial-gradient(
      88.57% 91.63% at -39.58% -41.67%,
      rgba(195, 196, 196, 0.0208333) 0%,
      rgba(194, 196, 197, 0.0342552) 0.01%,
      rgba(194, 196, 197, 0.0342552) 2.08%,
      rgba(178, 199, 203, 0.072) 79.17%,
      rgba(195, 196, 196, 0.0208333) 89.58%,
      rgba(196, 196, 196, 0) 100%
    );
  max-width: 845px;
  width: 100%;
  border-radius: 15px;
  padding: 0 35px 40px 35px;
  display: flex;
  flex-direction: column;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 108px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ffffff;
  }
`;
