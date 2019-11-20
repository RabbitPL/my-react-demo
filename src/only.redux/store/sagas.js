// redux-saga比redux-thunk复杂，可以处理异步请求，也可以处理一些较复杂逻辑。在大型项目中使用较好
import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('./list.json');
        // 在回调中收到数据后，再把action传递出去
        const action = initListAction(res.data);
        // 使用put替代store.dispatch(action);
        yield put(action); // 此时action会在reducer中去处理
    } catch(e) {
        console.log(e, './list.json网络请求失败!');
    }
}

// 必须定义一个generator函数
// 导出之后，中间件运行该函数
function* todoSagas() {
    // 2. sagas通过 takeEvery捕获每一次派发出得type为GET_INIT_LIST的action，然后会调用getInitList方法
    // 2. 实际上此时reducer也可以收到此action。并且先于sagas收到，但是不做任何处理
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoSagas;