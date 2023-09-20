import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store.jsx';
import { up } from './slice.jsx';

// 컴포넌트
function Counter() {
  // 액션을 전송하는 dispatch, 액션이 있는 곳에서 사용
  const dispatch = useDispatch();

  // useSelector는 함수를 인자로 받음
  // dispatch는 액션을 받음(actiond은 필수, payload는 옵션)
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <button
        onClick={() => {
          // 리덕스툴킷은 action creater를 자동으로 생성해준다, 2는 payload
          dispatch(up(2));
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
