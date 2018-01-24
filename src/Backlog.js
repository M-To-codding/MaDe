import React, {Component} from 'react';
import NewTask from './NewTask';

export default class Backlog extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  addTask(newTask) {
    this.setState({
      tasks: this.state.tasks.concat([newTask]),
    });
  }

  renderTasksList() {
    return this.state.tasks.map((task, index) => {
      return (
        <li key={task.name + index}>
          <p>Name: {task.name}</p>
          <p>Description: {task.description}</p>
        </li>);
    });
  }

  render() {
    return (
      <div>
        <h3>Backlog</h3>
        <div>
          <ul>
            {this.renderTasksList()}
          </ul>
        </div>
        <div>
          <h4>Create new task</h4>
          <NewTask onCreate={(newTask) => this.addTask(newTask)} />
        </div>
      </div>
    )
  }
}
