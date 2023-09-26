import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  const resp = await fetch(
    'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
  );
  const data = await resp.json();
  return data.value;
});

// createAsyncThunk는 비동기 작업을 처리하는 action을 만들어 준다.
// reducers를 사용하면 toolkit이 aciton creator를 자동으로 만들어 준다.
// 하지만 creatAsyncThunk로 만든 비동기 작업은 action creator를 자동으로 생성하지 못하기 때문에,
// slice의 extraReducers에 직접 action creator를 정의한다.
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: {
    value: 0,
    status: 'Welcome',
  },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'complete';
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'fail';
    });
  },
});
export default counterSlice;
export const { up, set } = counterSlice.actions;
export { asyncUpFetch };
