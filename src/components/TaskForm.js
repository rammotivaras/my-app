import React, { useState, useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");
  const { submitTask } = useContext(ProjectContext);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "" && timeSpent.trim() !== "" && description.trim() !== "") {
      const task = {
        taskName,
        timeSpent: parseFloat(timeSpent),
        description,
      };
      submitTask(task);
      setTaskName("");
      setTimeSpent("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleTaskSubmit}> 
    <Box sx={{margin:5}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            variant="outlined"
            // fullWidth
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Grid> 
    
        <Grid item xs={12} >
          <TextField
            label="Time Spent (hours)"
            variant="outlined"
            type="number"
            // fullWidth
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
        </Grid> 
        
        <Grid item xs={12} md={6} >
          <TextField 
            label="Description"
            variant="outlined"
            multiline
            minRows={3}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </Grid>
      </Grid> 
      </Box>
    </form>
  );
};

export default TaskForm;
