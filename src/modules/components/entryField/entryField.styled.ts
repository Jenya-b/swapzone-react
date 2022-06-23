import styled, { css } from 'styled-components';

export const EntryFieldWrapp = styled.div`
  position: relative;
  margin-top: 62px;
  width: 100%;
  height: 121px;
  display: flex;
  background: linear-gradient(175deg, #ffffff -127.61%, rgba(255, 255, 255, 0) 39.59%);
  border-radius: 10px;
  &::after {
    content: '';
    position: absolute;
    right: 20%;
    top: 50%;
    transform: translateY(-50%);
    height: 100px;
    width: 1px;
    background: ${({ theme }) => theme.colors.text};
  }
`;

export const Label = styled.div`
  position: absolute;
  top: 22px;
  left: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
`;

const inputStyles = css`
  height: 100%;
  background: none;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.text};
`;

export const AmountInputField = styled.input`
  width: 80%;
  padding-top: 20px;
  padding-left: 20px;
  ${inputStyles}
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

export const SelectCurrency = styled.select`
  width: 20%;
  ${inputStyles}
`;
