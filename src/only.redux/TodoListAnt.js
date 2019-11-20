import React, { Component } from 'react';
import store from './store';  // 直接找index.js文件内容
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList} from './store/actionCreators';
import TodoListAntUI from './TodoListAntUI';

// 拆分UI组件TodoListAntUI和容器组件TodoListAnt，其中TodoListAntUI负责render部分，而TodoListAnt负责逻辑实现部分
// 注意TodoListAntUI中的数据使用，要通过props
class TodoListAnt extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState(); // 获取store

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

        // 订阅store的变化
        // 4. 监听store中数据的变化，当变化会同步更新组件的state
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (
            <TodoListAntUI 
                inputVal={this.state.inputVal}
                handleBtnClick={this.handleBtnClick}
                handleInputChange={this.handleInputChange}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }


    componentDidMount() {
        // Redux中发送异步请求获取数据
        // axios.get('./list.json').then((res) => {
        //     const action = initListAction(res.data);
        //     store.dispatch(action);
        // });
        // 如果把异步请求或者过于复杂的逻辑写在组件中实现，组件会过于臃肿。
        // 可使用redux-thunk将请求或复杂逻辑移到action中处理
        // 使用redux-thunk前，需要在store创建时配置
        // 使用redux-thunk把上面的请求独立出去
        // const action = getTodoList(); // 构建一个action--函数
        // store.dispatch(action); // 调用store.dispatch时，action会被自动执行
        // 使用redux-saga替换redux-thunk
        const action = getInitList();
        store.dispatch(action); // 1. 当使用redux-saga之后，不仅仅reducer中可以接收到action，在sagas中也可以接收到数据
    }
    

    handleItemDelete(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }

    handleBtnClick() {
        // 1. 改变store中的数据
        const action = getAddItemAction();
        // 2. 将接下来动作交给store
        store.dispatch(action);
    }

    handleStoreChange() {
        // 当感知到store变化，则同步更新组件中store的数据
        this.setState(store.getState());
    }

    handleInputChange(e) {
        // 创建一个动作
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action); //传给store，store一旦接收到数据会同步给reducer
    }

}

export default TodoListAnt;