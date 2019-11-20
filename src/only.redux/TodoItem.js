import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 在此定义可以节约性能
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content, test } = this.props;
        return (
            <div>
            <li onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: content}}></li>
            {test}
            </div>
        )
    }

    handleClick() {
        const {index, deleteItem} = this.props;
        deleteItem(index);
    }
}

// 定义类型，并且可以设置是否必填
TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // content可以是string或者number类型，oneOfType可以提供一个或者的语法
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.string.isRequired  // test需要传一个string类型，并且必须传
}
// 设置默认值
TodoItem.defaultProps = {
    test: 'hello world'  // 接收值test的默认值为hello world
}
export default TodoItem;