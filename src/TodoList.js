import React, { Component } from 'react';
import { connect } from 'react-redux'; // 2. 通过connect获取state的内容,不需要再引入store文件

class TodoList extends Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                <button onClick={this.props.btnClick}>提交</button>
                { this.props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        )
    }
}
// 2. 让TodoList和store做链接connect
// 链接规则参数1，把store中的state映射到组件，作为组件的props固定写法，接收一个state，返回一个对象
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// 链接规则参数2，如果相对store的数据做修改，可以通过props做修改
// mapDispatchToProps： store.dispatch改变store的内容，映射到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        btnClick() {
            const action = {
                type: 'add_item_list'
            }
            dispatch(action);
        }
    }
}

// react-redux的两个API，Provider和connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);