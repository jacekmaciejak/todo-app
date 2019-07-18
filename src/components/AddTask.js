import React, { Component } from "react";
import "./AddTask.css";

class TaskList extends Component {
  state = {
    text: "",
    checked: false,
    date: "2019-10-26"
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
        />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          value={this.state.date}
          min="2019-07-15"
          max="2022-12-31"
        />
        <br />
        <button>Dodaj zadanie</button>
      </div>
    );
  }
}

export default TaskList;
