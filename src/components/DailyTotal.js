import React, { useContext } from "react";
import { ProjectContext } from "./ProjectContext";
import Typography from "@mui/material/Typography";

const DailyTotal = () => {
  const { tasks } = useContext(ProjectContext);

  const calculateTotalHours = () => {
    let totalHours = 0;
    tasks.forEach((task) => {
      totalHours += task.timeSpent;
    });
    return totalHours;
  };

  return (
    <div>
      <Typography variant="h6" component="h2">
        Daily Total Hours
      </Typography>
      <Typography variant="body2">
        Total Hours: {calculateTotalHours()}
      </Typography>
    </div>
  );
};

export default DailyTotal;
