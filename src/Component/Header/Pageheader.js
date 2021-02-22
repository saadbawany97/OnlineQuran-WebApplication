import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  pageheader: {
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    // backgroundColor: theme.palette.primary.main,
    // padding: theme.spacing(2),
    // borderRadius: "1em",
    // color: theme.palette.common.white,
  },
}));

function PageHeader({ heading }) {
  let classes = useStyles();
  return (
    <div className={classes.pageheader}>
      <Typography variant="h4" className={classes.label} align="center">
        {heading}
      </Typography>
    </div>
  );
}

export default PageHeader;
