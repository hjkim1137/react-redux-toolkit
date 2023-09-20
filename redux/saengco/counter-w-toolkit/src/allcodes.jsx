import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log('action', action); // {type: 'counter/up', payload: 2}
      state.value = state.value + action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
