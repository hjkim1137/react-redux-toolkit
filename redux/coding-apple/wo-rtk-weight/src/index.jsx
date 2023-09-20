import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from '../../../saengco/w-rtk-LeftRight/node_modules/@types/react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import App from './App';

const 체중 = 100;

// state 수정방법을 명시한 reducer 함수
function reducer(state = 체중, action) {
  if (action.type === '증가') {
    state++;
    return state;
  } else if (action.type === '감소') {
    state--;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
