import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCurrencies } from '../../../store/reducers/ActionCreators';
import { v4 } from 'uuid';
import { AmountInputField, EntryFieldWrapp, Label, SelectCurrency } from './entryField.styled';

type EntryFieldType = {
  labelText: string;
};

export const EntryField = ({ labelText }: EntryFieldType) => {
  const dispatch = useAppDispatch();
  const { currencies } = useAppSelector((state) => state.currencyReducer);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <EntryFieldWrapp>
      <Label>{labelText}</Label>
      <AmountInputField />
      <SelectCurrency>
        {currencies.map(({ ticker }) => (
          <option key={v4()}>{ticker}</option>
        ))}
      </SelectCurrency>
    </EntryFieldWrapp>
  );
};
