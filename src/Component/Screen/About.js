import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PageHeader from "../Header/Pageheader";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "80%",
    marginTop: theme.spacing(4),
  },
}));

function About() {
  let classes = useStyles();
  return (
    <>
      <PageHeader heading={"About Us"} />
      <div className={classes.root}>
        <Grid container justify="space-around">
          <Grid item md={5}>
            <Typography
              variant="body2"
              align="justify"
              className={classes.para}
            >
              <br />
              <b>السلام علیکم ورحمۃ اللہ </b>
              <br />
              <br />
              We provide online Quran teaching services for kids and adults in
              Pakistan, Australia, Canada and other countries. If you face
              problems reciting Quran and cannot recite Quran correctly, this is
              the right place for you to improve your recitation. We have good
              and qualified male and female teachers. 2 days free trial classes,
              if student is satisfied after the trial then the course will
              continue.
            </Typography>
          </Grid>

          <Grid item md={5}>
            <img
              className={classes.image}
              src="https://i.ytimg.com/vi/bxf-Nl_5ye8/maxresdefault.jpg"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default About;
