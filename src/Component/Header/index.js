import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppDrawer from "../AppDrawer";
import Navbar from "../Navbar";

const drawerWidth = 240;

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />

      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
    </>
  );
}
