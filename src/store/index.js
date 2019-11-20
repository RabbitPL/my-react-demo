// applyMiddleware 使用redux中间件
import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import todoSagas from './sagas'

const composeEnhancers =
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware()
// 同时使用两个中间件,thunk和dev-tools
// const enhancer = composeEnhancers(
//   applyMiddleware(...[thunk]),
// );
// 引入redux-saga中间件
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// 使用createStore创建store，使用reducer初始化数据
// 通过applyMiddleware使用redux-thunk中间件
// 参数2⃣️使用redux-devtools-extension,实际上也是redux的中间件
const store = createStore(
    reducer, 
    enhancer
);

sagaMiddleware.run(todoSagas);

export default store;