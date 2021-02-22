import { makeStyles } from "@material-ui/core";
import Header from "./Component/Header/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Component/Screen/Home";
import Contact from "./Component/Screen/Contact";
import About from "./Component/Screen/About";
import Courses from "./Component/Screen/Courses";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    // marginTop: theme.spacing(3),
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  root: {
    display: "flex",
  },
}));

function App() {
  let classes = useStyles();
  return (
    <>
      <Router>
        {" "}
        <div className={classes.root}>
          <Header />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact from="/" render={(props) => <Home {...props} />} />
              <Route
                exact
                path="/contact"
                render={(props) => <Contact {...props} />}
              />
              <Route
                exact
                path="/about"
                render={(props) => <About {...props} />}
              />
              <Route
                exact
                path="/courses"
                render={(props) => <Courses {...props} />}
              />
            </Switch>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
