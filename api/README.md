- 概念的理解
  - 数据如何在redux中流动
  - redux中数据如何传入到react中
  - react组件变化又是如何体现到state中
  - 组件之间的数据如何传递
  - react组件如何被触发重新渲染
  - state很大会不会有性能问题
  - 如何调优
- api的使用
- 合理规划state结构
- 文件结构的划分
- 代码的调试
- 最佳实践

state包括：
- 服务器响应
- 缓存数据
- 本地生成尚未持久化到服务器的数据


组件何时会被重新render呢？
- 初次render，之前有个componentWillMount事件
- state发生了变化，会依次触发shouldComponentUpdate和componentWillUpdate
- props发生了变化，会依次触发componentWillReceiveProps、shouldComponentUpdate和componentWillUpdate
- 以上两者如shouldComponentUpdate返回false，则不进行下面的componentWillUpdate事件
- 

- action是一个描述发生什么的对象，里面包含行为（type）和数据（data），是唯一改变state的触发入口
- 对action的控制可以是用户，也可以是网络请求等