import { useSelector, useDispatch } from 'react-redux';

function App() {
  const 꺼내온거 = useSelector((state) => state);
  // 꺼내온거=100
  const dispatch = useDispatch();

  // 컴포넌트에서 state에 수정 요청하는 법:dispatch 사용
  return (
    <div classname="App">
      <p>test 님의 처참한 몸무게: {꺼내온거}</p>
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
