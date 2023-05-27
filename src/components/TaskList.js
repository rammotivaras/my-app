import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const TaskList = () => {
  const { tasks } = useContext(ProjectContext);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Task Listing 
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={task.taskName}
              secondary={`Time Spent: ${task.timeSpent} hours - Description: ${task.description}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;

