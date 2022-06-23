import { InputSearch } from '../../components/inputSearch/inputSearch';
import { EntryField } from '../../components/entryField/entryField';
import { StyledCryptoForm } from './cryptoForm.styled';

export const CryptoForm = () => {
  return (
    <StyledCryptoForm>
      <InputSearch />
      <EntryField labelText="You send" />
      <EntryField labelText="You get" />
    </StyledCryptoForm>
  );
};
