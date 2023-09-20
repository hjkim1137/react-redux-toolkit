import { createSlice } from '@reduxjs/toolkit';

// toolkit을 사용하면 복제본을 활용해 지저분하게 코딩하지 않아도 됨
// slice는 작은 store다
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
