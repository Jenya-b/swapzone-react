import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axios from '../../utils/api';

export const fetchCurrencies = createAsyncThunk('currency/fetchAll', async (_, thunkApi) => {
  try {
    const response: AxiosResponse = await axios.get(`currencies`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Не удалось загрузить');
  }
});
