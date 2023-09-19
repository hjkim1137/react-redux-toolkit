import React, { useState } from 'react';
import './style.css';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
// react-redux의 4인방:
// Provider(컴포넌트): state를 어떤 component들에게 제공할 것인가에 대한 가장 바깥쪽 울타리(props로 store 필수)
// useSelector(어떤 state 값을 사용할 지 선택)
// useDispath(state 값을 변경시킬 때 사용)

// reducer는 state를 바꾸는 방법을 명시한 함수 이다.
// 인자로 state와 action을 전달받으며, dispatch에 의해 호출된다.
function reducer(currentState, action) {
  // 후에 plus(button)라는 액션전달 받은
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  // 새로운 state를 만드는 데 과거를 복제하며 불변성을 유지한다.
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

const store = createStore(reducer); // reducer를 store에 등록한다.

function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  console.log('2');
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  console.log('3');
  // number(상태값)을 가장 하위 컴포넌트 left3 에서 받기 위해 useSelector 사용
  // useSelector는 "함수"를 인자로 받음

  const value = useSelector((state) => state.number);
  // state.number를 뱉어낸다.
  // 아래와 같은 내용
  // function f(state) {
  //   return state.number;
  // }
  // const value = useSelector(f);

  return (
    <div>
      <h1>Left3: {value} </h1>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  const dispatch = useDispatch();
  // 버튼을 누르면(액션) 상태가 변경되게끔 하기

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
          // 위와 같이 액션을 받아 전달하면 reducer가 호출된다
        }}
      ></input>
    </div>
  );
}
