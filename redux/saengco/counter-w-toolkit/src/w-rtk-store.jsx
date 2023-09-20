import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './w-rtk-slice';

// slice들을 모아 store 만들기(필수 값: 각 slice의 reducer)
// reducer는 reducers 안의 여러 액션들을 하나로 합친 reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
