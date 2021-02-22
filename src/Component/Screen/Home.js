import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",

    marginTop: theme.spacing(4),
  },
  iframe: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
}));

function Home() {
  let classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        className={classes.iframe}
        height="415"
        src="https://www.youtube.com/embed/oFDptQRaD1s?autoplay=1&mute=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Home;
