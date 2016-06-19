/*
let FluxStandardAction = {
  type: 'ACTION_NAME',
  payload: <bool | number | string | object>, // action的负载，可以是数据或error对象
  error: <bool>, // 指明改action是否是一个以error为负载的action
  meta: <string> // action元数据，包含解释该action含义的信息
}


(dispatch, getState) => { 
  //在函数体内可以使用 dispatch 方法来发射其他 action
  //在函数体内可以使用 getState 方法来获取当前的state
}
//*/

import ajax from '../services/ajax';

// 命令空间，对普通action做划分
const prefix = 'apple/';

let actions = {
  pickApple: () => (dispatch, getState) => {
    // 正在摘苹果
    if (getState.isPicking) {
      return;
    }
    
    // 通知摘苹果
    
    // 发送摘苹果请求
    
  }
}

let FSA = {
  type: 'EAT_APPLE',
  payload: 3, // 负载是3，说明吃掉3号苹果，或 {id: 3}
  meta: 'this action will eat an apple!'
}

let pickAppleAction = (dispatch, getState) => {
  ajax({
    url: '/pickApple',
    method: 'GET',
  }).done(data => {
    // 发射普通 action
    dispatch({
      type: 'DONE_PICK_APPLE',
      payload: data.weight // payload: {weight: data.weight}
    });
  }).fail( xhr => {
    // 发射普通action，负载是一个error
    dispatch({
      type: 'FAIL_PICK_APPLE',
      payload: new Error(xhr.responseText),
      error: true
    });
  })
}

//调用
dispatch(pickAppleAction);