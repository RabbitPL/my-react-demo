import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes';

// 使用actionCreator统一管理所有的action, 并且方便进行自动化测试
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// 使用redux-thunk，可以return一个函数
// export const getTodoList = () => {
//     // 当调用getTodoList生成一个内容为函数的action时，该函数可以收到dispatch方法
//     return (dispatch) => {
//         axios.get('./list.json').then((res) => {
//             const action = initListAction(res.data); // 创建action
//             dispatch(action); 
//         });
//     }
// }


export const getInitList = () => ({
    type: GET_INIT_LIST
});