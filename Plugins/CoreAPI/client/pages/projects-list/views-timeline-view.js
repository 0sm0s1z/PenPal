import React from "react";
import { Components, registerComponent } from "PenPal";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const ProjectsViewTimelineView = ({ projects }) => {
  return null;
};

export const Icon = <CalendarViewDayIcon />;
export const Name = "Timeline View";

registerComponent("ProjectsViewTimelineView", ProjectsViewTimelineView);
