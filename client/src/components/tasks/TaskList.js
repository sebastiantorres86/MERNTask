import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {
  const ProjectTasks = [
    { name: "Choose Platform", state: true },
    { name: "Choose Colors", state: false },
    { name: "Choose Pay Platform", state: false },
    { name: "Choose Hosting", state: true },
  ];

  return (
    <Fragment>
      <h2>Project: Virtual Store</h2>

      <ul className="task-list">
        {ProjectTasks.length === 0 ? (
          <li className="task">
            <p>No pending tasks</p>
          </li>
        ) : (
          ProjectTasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-delete">
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
