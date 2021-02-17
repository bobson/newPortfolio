import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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

const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: theme.spacing(2),
    zIndex: "100",
  },
  logo: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(5),
    fontFamily: "'Ballet', cursive",
  },
  toolbar: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& .MuiTab-root": {
      minWidth: "150px",
      fontFamily: "Montserrat, sans-serif",
    },
  },
  menuIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginLeft: "auto",
  },
  contactButton: {
    marginLeft: theme.spacing(5),
    color: "#ff4d5a",
    // fontSize: "2rem",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // height: "100vh",
    zIndex: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a)",
    height: "100vh",
    zIndex: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerTabs: {
    color: "white",
    fontSize: "3rem",
    "& .MuiTab-root": {
      fontSize: "2rem",
      fontFamily: "Montserrat, sans-serif",
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpen(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 400) {
      setValue(0);
    }
    if (window.scrollY > 400 && window.scrollY <= 1000) {
      setValue(1);
    }
    if (window.scrollY > 1000 && window.scrollY <= 1400) {
      setValue(2);
    }
    if (window.scrollY > 1400) {
      setValue(3);
    }
    // console.log(window.scrollY);
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
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
            <Tab label="home" href="#Home" />
            <Tab label="about me" href="#About" />
            <Tab label="work" href="#Work" />
            <Tab label="contact" />
          </Tabs>
          {/* <Button
            startIcon={<MailOutlineIcon />}
            className={classes.contactButton}
          ></Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="drawer tabs"
          className={classes.drawerTabs}
        >
          <Tab label="home" href="#Home" />
          <Tab label="about me" href="#About" />
          <Tab label="work" href="#Work" />
          <Tab label="contact" href="#Contact" />
        </Tabs>
      </Drawer>
    </>
  );
}
