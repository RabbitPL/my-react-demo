import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provider是一个组件
// import App from './App'; // 加载一个APP.js文件
import TodoList from './TodoList';
import store from './store';
// import TodoListAnt from './redux/todolist/TodoListAnt';

// 1. 链接store，Provider内部所有的组件，都能获取store的内容
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
// 引入APP，把APP渲染到页面
//ReactDOM.render: APP组件挂载到root这个dom节点
// jsx语法：<App />(标签)，如果在代码里面写了jsx语法，则必须引入React，通过React对jsx语法进行编译
ReactDOM.render(App, document.getElementById('root'));

