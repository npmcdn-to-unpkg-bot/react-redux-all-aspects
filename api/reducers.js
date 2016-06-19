import { createStore, applyMiddleware, compose } from 'redux';

// 初始state
let initialState = 0;

// reducer是纯函数，返回全新的state，如果state是对象，则比较复杂
function counter(action, state = initialState) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// 利用reducer（这个reducer应该是根reducer）返回的全新state创建store来存放应用的状态
//store有4个方法：getState(获取)、replaceReducer、dispatch(改变)、subscribe(订阅)
let store = createStore(counter);

//复杂写法
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    ...devTools
  )
);

// 当store发生变化时，打印出来
store.subscribe(() => 
  console.log(store.getState())
);

// 改变store的唯一方法是dispatch一个action
store.dispatch({type: 'INCREMENT'}); //值传一个action对象

//复杂的写法
function returnAction(data) {
  // 返回一个action对象供dispatch调用
  return {
    type: 'INCREMENT',
    data: data
  }
}
store.dispatch()