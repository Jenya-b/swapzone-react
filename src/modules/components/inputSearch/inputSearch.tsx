import { Input, InputIcon, InputWrapp } from './inputSearch.styled';

export const InputSearch = () => (
  <InputWrapp>
    <Input placeholder="Exchange Crypto" />
    <InputIcon sx={{ width: 35, height: 35 }} />
  </InputWrapp>
);
