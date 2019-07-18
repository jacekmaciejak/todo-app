import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "zagrac w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    console.log("delete w komponencie App");
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };
  changeTaskStatus = id => {
    console.log("change w komponencie App");

    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="App">
        todo app
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
