import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            {
                this.props.tasks.map((task) => (
                    <ToDoItem task={task} />
                ))
            }
            </div>
        )
    }
}

export default ToDoList;
