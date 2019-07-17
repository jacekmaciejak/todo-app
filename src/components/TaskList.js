import * as React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <div>
      <h2>Lista Taskow</h2>
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
