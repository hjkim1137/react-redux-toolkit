import React from 'react';
import './style.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

// 슬라이스(slice) 정의
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// 슬라이스의 액션과 리듀서 추출
const { actions, reducer } = counterSlice;

// 스토어 생성
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
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
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

function Left3() {
  console.log('3');
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Left3: {value}</h1>
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
          dispatch(actions.increment());
        }}
      />
    </div>
  );
}
