import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrency } from '../../interfaces/store';
import { fetchCurrencies } from './ActionCreators';

type InitialStateType = {
  currencies: ICurrency[];
  isLoading: boolean;
  error: string;
};

const initialState: InitialStateType = {
  currencies: [],
  isLoading: false,
  error: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrencies.fulfilled.type]: (state, action: PayloadAction<ICurrency[]>) => {
      state.isLoading = false;
      state.error = '';
      state.currencies = action.payload;
    },
    [fetchCurrencies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrencies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
