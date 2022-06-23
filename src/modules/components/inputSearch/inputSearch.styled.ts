import Search from '@mui/icons-material/Search';
import styled from 'styled-components';

export const InputWrapp = styled.div`
  width: ${({ theme }) => theme.sizes.inputSearch.width}%;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes.inputSearch.width}%;
  height: ${({ theme }) => theme.sizes.inputSearch.height}px;
  background: none;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.text};

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &:-moz-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputIcon = styled(Search)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 1;
  color: ${({ theme }) => theme.colors.text};
`;
