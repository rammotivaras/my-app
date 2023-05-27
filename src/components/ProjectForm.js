import React, { useState, useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import { Button, TextField } from "@mui/material";


const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const { submitProject } = useContext(ProjectContext);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() !== "") {
      submitProject(projectName);
      setProjectName("");
    }
  };

  return (
    <form onSubmit={handleProjectSubmit}>
      <TextField
        label="Project Name"
        variant="outlined"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      /> 
      <Button sx={{display:'flex',marginTop:2 }} type="submit" variant="contained" color="success">
        Submit
      </Button>
    </form>
  );
};

export default ProjectForm;
