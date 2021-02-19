import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Drawer from "@material-ui/core/Drawer";
import DialogSlide from "../Dialog/DialogSlide";

import { useStyles } from "./styles";

export default function Navbar() {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [openDrawer, setDrawerOpen] = useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!openDrawer);
  };

  const handleTabsChange = (event, newValue) => {
    setTabIndex(newValue);
    setDrawerOpen(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 400) {
      setTabIndex(0);
    }
    if (window.scrollY > 400 && window.scrollY <= 900) {
      setTabIndex(1);
    }
    if (window.scrollY > 900 && window.scrollY <= 1400) {
      setTabIndex(2);
    }
  });

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Typography className={classes.logo} variant="h6">
          SM
        </Typography>
        <IconButton
          className={classes.menuIcon}
          edge="end"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Toolbar className={classes.toolbar}>
          <Tabs
            value={tabIndex}
            onChange={handleTabsChange}
            aria-label="simple tabs"
          >
            <Tab label="home" href="#Home" />
            <Tab label="about me" href="#About" />
            <Tab label="work" href="#Work" />
          </Tabs>
          <DialogSlide
            openDialog={openDialog}
            handleDialogOpen={handleDialogOpen}
            handleDialogClose={handleDialogClose}
          >
            <Button
              variant="contained"
              // color="primary"
              className={classes.contactButton}
              onClick={handleDialogOpen}
            >
              Let's Talk
            </Button>
          </DialogSlide>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={openDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Tabs
          indicatorColor="primary"
          orientation="vertical"
          value={tabIndex}
          onChange={handleTabsChange}
          aria-label="drawer tabs"
          className={classes.drawerTabs}
        >
          <Tab label="home" href="#Home" />
          <Tab label="about me" href="#About" />
          <Tab label="work" href="#Work" />
        </Tabs>
        <DialogSlide
          openDialog={openDialog}
          handleDialogOpen={handleDialogOpen}
          handleDialogClose={handleDialogClose}
        >
          <Button
            className={classes.drawerButton}
            onClick={() => {
              handleDialogOpen(), toggleDrawer();
            }}
          >
            Contact
          </Button>
        </DialogSlide>
      </Drawer>
    </>
  );
}
