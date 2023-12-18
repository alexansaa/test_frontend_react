import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const greetingsUrl = 'http://127.0.0.1:3000';

const initialState = {
  greeting: '',
  isLoading: true,
  error: undefined,
};

export const getResultItem = createAsyncThunk('result/getResultItem', async (thunkAPI) => {
  try {
    const headers = {
      Accept: 'application/json',
    };

    const resp = await axios.get(greetingsUrl, { headers });
    const myData = resp.data;
    const myTransData = myData.message;

    return myTransData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResultItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResultItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(getResultItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default greetingSlice.reducer;
