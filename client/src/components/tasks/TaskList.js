import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const TaskList = () => {
  // Extract projects from initial state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // If there is no project selected
  if (!project) return <h2>Select a project</h2>

  // Array destructuring to get the current state
  const [actualProject] = project

  const ProjectTasks = [
    { name: "Choose Platform", state: true },
    { name: "Choose Colors", state: false },
    { name: "Choose Pay Platform", state: false },
    { name: "Choose Hosting", state: true },
  ];

  // Delete a project
  const onClickDelete = () => {
    deleteProject(actualProject.id)
  }
  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>

      <ul className="task-list">
        {ProjectTasks.length === 0 ? (
          <li className="task">
            <p>No pending tasks</p>
          </li>
        ) : (
          ProjectTasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-delete" onClick={onClickDelete}>
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
