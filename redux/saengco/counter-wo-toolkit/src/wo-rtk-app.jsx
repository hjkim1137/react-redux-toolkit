// without redux-toolkit

import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// reducer 정의
function reducer(state, action) {
  if (action.type === 'up') {
    return { ...state, value: state.value + action.step };
    // 기존값을 복제
  }
  return state;
}

// 초기값 정의
const initialState = { value: 0 };

// state와 reducer를 store에 저장
const store = createStore(reducer, initialState);

// 컴포넌트
function Counter() {
  // 액션을 전송하는 dispatch, 액션이 있는 곳에서 사용
  const dispatch = useDispatch();

  // useSelector는 함수를 인자로 받음
  // dispatch는 액션을 받음(actiond은 필수, payload는 옵션)
  const count = useSelector((state) => state.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'up', step: 2 });
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

// provider를 주입하여 store가 적용되는 영역 정의
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
