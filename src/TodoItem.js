import React, {Component} from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        // 在此定义可以节约性能
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick} dangerouslySetInnerHTML={{ __html: content}}></li>
        )
    }

    handleClick() {
        const {index, deleteItem} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;