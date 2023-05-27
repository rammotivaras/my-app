import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div>
      <h2>Project Listing Page</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
