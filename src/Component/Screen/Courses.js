import { makeStyles } from "@material-ui/core";
import React from "react";
import CourseCard from "../Card";
import PageHeader from "../Header/Pageheader";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
  },
}));

function Courses() {
  let classes = useStyles();
  return (
    <>
      <PageHeader heading={"Courses"} />
      <div className={classes.root}>
        <CourseCard />
      </div>
    </>
  );
}

export default Courses;
