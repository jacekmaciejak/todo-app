import * as React from "react";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do
          <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostalo zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString(); //zamiana czasu
    return (
      <div>
        <p>
          <strong>{text}</strong>
          <em> (zrobic do {date})</em>
          <br />- potwierdzenie wykonania <span> {finish}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};
export default Task;
