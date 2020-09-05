import React, { Fragment, useState } from "react";

const NewProject = () => {
  // State for Project
  const [project, setProject] = useState({
    name: "",
  });

  // Extract project name
  const { name } = project;


  // Read the contents of the input
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // When user submits a project
  const onSubmitProject = e => {
    e.preventDefault()

    // Validate the project

    // Add to state

    // Restart the form
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primary">
        New Project
      </button>

      <form className="form-new-project"
      onSubmit={onSubmitProject}>
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
          value={name}
          onChange={onChangeProject}
        />

        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Add new project"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
