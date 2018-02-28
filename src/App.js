import React, { Component } from 'react';
import ToDoList from './components/ToDoList'
import NewTaskForm from './components/NewTaskForm'

class App extends Component {
  constructor(props) {
        super(props)
        this.state = { tasks: [ "Find things to do" ] };
  }

  addNewTask = (taskDescription) => {
      this.setState({tasks: this.state.tasks.concat(taskDescription)})
  }

  render() {
    return (
      <div>
        <ToDoList tasks={this.state.tasks}/>
        <NewTaskForm addNewTask={this.addNewTask}/>
      </div>
    );
  }
}

export default App;
