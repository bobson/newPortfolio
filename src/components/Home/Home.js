import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResponsiveFontSizes from "../ResponsiveFontSizes/ResponsiveFontSizes";

// import "./Home.css";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "80vh",
  },
  border: {
    display: "inline-block",
    "& span": {
      display: "block",
      width: "88px",
      height: "4px",
      borderRadius: "5px",
      background: " #ff4d5a",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    // <Box mt={8}>
    <Grid container className={classes.root} alignItems="center">
      {/* <Box order={1}> */}
      <Grid item sm={12} md={6}>
        <ResponsiveFontSizes>
          <Typography variant="h2" id="Home">
            SLOBODAN <br />
            MARKOSKI
          </Typography>
        </ResponsiveFontSizes>
        <div className={classes.border}>
          <span></span>
          <span></span>
        </div>
        <Typography variant="h4">Web Developer</Typography>
      </Grid>
      {/* </Box> */}
      <Grid item sm={12} md={6}>
        <ResponsiveFontSizes>
          <Typography variant="h3">PORTFOLIO</Typography>
        </ResponsiveFontSizes>
      </Grid>
    </Grid>
  );
};

export default Home;
