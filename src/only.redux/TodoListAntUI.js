import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

// 无状态组件，一般当定义一个只负责渲染的UI可以定义为无状态组件
const TodoListAntUI = (props) => {
    return (
        <div style={{marginTop: '15px', marginLeft: '10px'}}>
            <Input 
                placeholder="Todo info" value={props.inputVal} 
                style={{width: '300px', marginRight: '10px' }}
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, idx) => (
                    <List.Item onClick={() => {props.handleItemDelete(idx)}}>{item}</List.Item>
                )}
            />
        </div>
    )
}


export default TodoListAntUI;