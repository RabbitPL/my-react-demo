import React, {Fragment, Component}from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css';
class TodoList extends Component {
    // 类实例被首先调用
    constructor(props) {
        // 调用父类Component方法
        super(props);
        // 定义数据，放在状态中
        this.state = {
            inputValue: 'hello!!!',
            list: ['学英语', '学java']
        }

        // 统一处理bind绑定
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
        console.log('render');
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputValue">输入内容</label>
                    <input
                        id="inputValue"
                        className="input"
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                        value={this.state.inputValue} 
                    />
                    <button onClick={this.handleClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    { this.getTodoItem() }
                </ul>
                <Test content={this.state.inputValue}/> 
            </Fragment>
        );
    }

    // 通过bind改变this指向
    handleInputChange(evt) {
        // 想要页面发生变化，则修改数值
        // 在react中想要改变state，通过setState方法改变数据
        // const inputValue = evt.target.value;
        // this.input替换target
        const inputValue = this.input.value;
        // 异步修改
        this.setState(() => ({
            inputValue
        }))
    }

    handleClick() {
        // 可以同时设置多个state
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        })
        // 此时获取到的dom不会按照预期发生变化，因为setState是一个异步函数，并不会立即执行
        // console.log(this.ul.querySelectorAll('div').length);
        // 而setState提供了一个回调函数，需要再回调用获取dom元素才是真实发生变化后渲染的dom
    }

    handleItemDelete(idx) {
        // state不允许修改任何改变，要把list先copy出来        
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(idx, 1);
            return {list};
        });
    }
    
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
            <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
            )
        });
    }
}
export default TodoList;