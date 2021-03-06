# react-redux-all-aspects
react和redux的方方面面

### 安装
```
npm install react -S
npm install redux -S
npm install react-redux -S
npm install redux-devtools -D

npm install redux-thunk
npm install redux-promise
npm install redux-actions
```

### API
#### redux api
- { createStore, applyMiddleware, getState, subscribe }

#### redux-thunk
- thunkMiddleware

#### redux-logger
- createLogger()

#### react-dom
- { render }

#### babel-polyfill

#### react-redux
- { Provide, connect } 通过它将redux中数据传给react
```
//返回一个新的已与redux store连接的组件类
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
```

### 典型性配置文件
.babelrc
```
{
  "presets": ['es2015', 'react'],
  "env": {
    "develop": {
      "presets": ["react-hmre"]
    }
  }
}
```

![react事件触发流程](https://leanote.com/api/file/getImage?fileId=575512bcab64413fd702a207)
![action到reducer](https://leanote.com/api/file/getImage?fileId=5760b221ab64415bec001ee4)
![reducer流程](https://leanote.com/api/file/getImage?fileId=5760b162ab64415d8b001fe1)
![react-redux流程](https://leanote.com/api/file/getImage?fileId=5760b197ab64415d8b001fe9)
![redux和react结合](https://leanote.com/api/file/getImage?fileId=5760ce77ab64415bec002096)

[redux中文文档](http://cn.redux.js.org/index.html)