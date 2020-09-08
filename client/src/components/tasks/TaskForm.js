import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const TaskForm = () => {
  // Extract if a project is active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  // If there is no project selected
  if (!project) return null;

  // Array destructuring to get the current state
  const [actualProject] = project;

  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
          />
        </div>

        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Add task"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
