import React, { Component } from 'react';

class Test extends Component {
    render() {
        console.log('subRender');
        return (
            <div>{this.props.content}</div>
        )
    }
}
export default Test;