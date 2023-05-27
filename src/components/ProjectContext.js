import React, { createContext, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  tasks: [],
  submitProject: () => {},
  submitTask: () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const submitProject = (projectName) => {
    setProjects((prevProjects) => [...prevProjects, projectName]);
  };

  const submitTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const contextValue = {
    projects,
    tasks,
    submitProject,
    submitTask,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};
