import React from 'react';
import './style.css';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// createSlice를 사용하여 슬라이스를 정의합니다.
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 1 }, // 초기 상태를 설정합니다.
  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});

// configureStore를 사용하여 Redux 스토어를 생성합니다.
const store = configureStore({
  reducer: counterSlice.reducer,
});

// increment 액션 생성자를 가져옵니다.
const { increment } = counterSlice.actions;

export default function App() {
  return (
    <Provider store={store}>
      <div id="container">
        <h1>Root</h1>
        <div id="grid">
          <Left1 />
          <Right1 />
        </div>
      </div>
    </Provider>
  );
}

function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}

function Left2() {
  console.log('2');
  return (
    <div>
      <h1>Left2 : </h1>
      <Left3 />
    </div>
  );
}

function Left3() {
  console.log('3');
  // useSelector를 사용하여 상태에 접근합니다.
  const number = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

function Right3() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch(increment()); // "+" 버튼 클릭 시 액션을 디스패치합니다.
        }}
      ></input>
    </div>
  );
}
