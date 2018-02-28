import React, { Component } from 'react';

class NewTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = { task: "" }
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.task)
        this.setState({task: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" value={this.state.task} onChange={this.handleChange} />
                <input type="submit" value="Add Task" />
            </form>
        )
    }
}

export default NewTaskForm;