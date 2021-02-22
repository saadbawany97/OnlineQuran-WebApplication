import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import ContactsIcon from "@material-ui/icons/Contacts";
import { useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";
import InfoIcon from "@material-ui/icons/Info";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withRouter, useHistory, useParams } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  liItem: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius: "0.5em",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  root: {
    display: "flex",
  },
  searchfield: {
    marginRight: theme.spacing(4),
    backgroundColor: theme.palette.common.white,
    borderRadius: "0.3em",
  },
  icon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

let itemList = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About Us", path: "/about", icon: <InfoIcon /> },
  { name: "Contact Us", path: "/contact", icon: <ContactsIcon /> },
  { name: "Courses", path: "/courses", icon: <PhotoAlbumIcon /> },
];

function AppDrawer({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((text, index) => (
            <ListItem
              className={classes.liItem}
              button
              key={text.name}
              onClick={() => history.push(text.path)}
            >
              <ListItemIcon> {text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default withRouter(AppDrawer);
