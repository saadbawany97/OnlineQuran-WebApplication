import { Badge, IconButton } from "@material-ui/core";
import React from "react";

function Badgebutton(props) {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        {props.icon}
      </Badge>
    </IconButton>
  );
}

export default Badgebutton;
