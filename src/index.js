import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';
// HashRouter : 라우팅 안전하게 할 수 있게 도와줌. 사이트 주소 뒤에 #이 붙는데 #뒤에 적는것은 서버로 전달 X
// BrowserRouter : 라우팅을 리액트가 아니라 서버에게 요청할 수도 있어서 위험

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alertDefault = true;
function reducer2(state = alertDefault, action){
  if( action.type === '닫기'){
    state = false;
    return state
  } else {
    return state
  }
}

let defaultNum = [
];



// reducer(state = 초기값, 액션)
function reducer(state = defaultNum, action){

  if( action.type === '추가'){

    let found = state.findIndex((a)=> { return a.id === action.payload.id });
    // console.log(found);

    if( found >= 0 ) {
      let copy = [...state];
      copy[found].quan++
      return copy
    } else {
      let copy = [...state];
      copy.push(action.payload);
      // console.log(action.payload);
      return copy
    }
  }


  if( action.type === '증가') {
    let copy = [...state];
    let i = action.payload.id;
    copy[i].quan++;
    return copy

  } if ( action.type === '감소'){
    let copy = [...state];
    let i = action.payload.id;
    copy[i].quan--;
    if(copy[i].quan <= 0){
      copy[i].quan = 0;
    }
    return copy
  } if ( action.type === '제거'){
    let copy = [...state];
    let i = action.payload.key;
    var array = copy.splice(i, 1);
    // console.log(array);
    return copy
  } else {
    return state
  }

}

let store = createStore(combineReducers({
  reducer, reducer2
}));





ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
