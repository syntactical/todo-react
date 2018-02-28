import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type="checkbox" />
                <span>{this.props.task}</span>
            </div>
        )
    }
}

export default ToDoItem;

