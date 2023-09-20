import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './wo-rtk-app';

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
