import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = "100%";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1D1D1D",
    boxShadow: "none",
    padding: theme.spacing(2),
    zIndex: "900",
    alignItems: "center",
  },
  logo: {
    // margin: theme.spacing(2),
    // marginLeft: theme.spacing(5),
    // fontFamily: "'Ballet', cursive !important",
  },
  toolbar: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& .MuiTab-root": {
      minWidth: "50px",
      maxWidth: "200px",
      fontFamily: "Montserrat, sans-serif",
      // color: "#08FDD8",
    },
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    marginLeft: "auto",
  },
  contactButton: {
    marginLeft: theme.spacing(5),
    color: "#08FDD8",
    // fontSize: "2rem",
    textTransform: "none",
    fontWeight: "900",
    // background: "#08FDD8",
    border: "1px solid #08FDD8",
    "&:hover": {
      background: "#08FDD8",
      color: "black",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // height: "100vh",
    // zIndex: 0,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a)",
    height: "100vh",
    // zIndex: 0,
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
  drawerButton: {
    fontSize: "2rem",
    opacity: "0.7",
    color: "white",
  },
  space: {
    height: "86px",
  },
}));
