import React from "react";
import NewProject from "../projects/NewProject";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Task</span>
        <NewProject />
      </h1>

      <div className="projects">
        <h2>Your Projects</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
