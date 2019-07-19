import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 6;
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
        text: "zbudowac cos",
        date: "2019 - 10 - 16",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "kupic w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "opowiedziec w cos",
        date: "2019 - 10 - 16",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "wyniesc w cos",
        date: "2019 - 10 - 16",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "posprzatac w cos",
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

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, //tekst z inputa
      date: date, //tekst z inputa
      important: important, //wartosc z inputa
      active: true,
      finishDate: null
    };

    this.counter++;
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
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
