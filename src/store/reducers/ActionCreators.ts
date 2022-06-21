import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../utils/api';

export const fetchCurrencies = createAsyncThunk('currency/fetchAll', async (_, thunkApi) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});
