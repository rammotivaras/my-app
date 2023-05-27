import React from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DailyTotal from "./components/DailyTotal";
import { ProjectProvider } from "./components/ProjectContext"; 
import './App.css'

const App = () => {
  return (
    <ProjectProvider>
      <div className="App">
        <h1>Project Management App</h1>
        <ProjectForm />
        <ProjectList />
        <TaskForm />
        <TaskList />
        <DailyTotal />
      </div>
    </ProjectProvider>
  );
};

export default App;
