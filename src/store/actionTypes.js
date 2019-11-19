// 在组件代码里面要不断的派发action，并且有不同的type，在reducer里面处理的action type要和组件中派发的一一对应
// 定义一个actionTypes.js文件，对action type进行拆分
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
export const INIT_LIST_ACTION = 'init_list_action';