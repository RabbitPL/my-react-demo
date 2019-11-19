import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
const defaultStore = {
    inputVal: '',
    list: []
};

// 负责存储整个项目的数据
// state: 存放整个store中的数据
// reducer可以接收但是绝不能修改state
// 第一次执行会使用defaultStore设置默认值
// 给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultStore, action) => {
    // state和action分别是拿到之前数据和当前要做的事情
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;
        return newState; // 修改store
    }
    // 3. store中同步接收到内容,同步更新list
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = '';
        return newState; // 该数据给store，store中数据发生变化
    }

    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1); // 删除列表
        return newState; 
    }

    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data; // 初始化列表
        return newState; 
    }
    return state;
}