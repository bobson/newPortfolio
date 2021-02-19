import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResponsiveFontSizes from "../ResponsiveFontSizes/ResponsiveFontSizes";

// import "./Home.css";

const useStyles = makeStyles((theme) => ({
  toolbar: { height: "86px" },
  root: {
    width: "100%",
    height: "90vh",
    // paddingBottom: "30vh",
    // paddingTop: "40vh",
  },
  border: {
    display: "inline-block",
    "& span": {
      display: "block",
      width: "88px",
      height: "4px",
      borderRadius: "5px",
      background: "#ff4d5a",
    },
    "& span:first-child": {
      marginBottom: "1rem",
    },
    "& span:last-child": {
      marginLeft: "54px",
    },
  },
  textCenter: {
    // textAlign: "center",
    color: "#ff4d5a",
    fontWeight: "900",
    // position: "absolute",
    // top: "30%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <div id="About" className={classes.toolbar}></div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        // justify="space-between"
        className={classes.root}
      >
        <Box clone order={{ xs: "2", sm: "1" }}>
          <Grid item xs={12} order={2} sm={6}>
            <Typography className={classes.textCenter} variant="subtitle1">
              "Results-oriented Front-end Developer love using React and
              Material UI, dedicated to creating and optimizing interactive,
              user-friendly, and feature-rich websites. Leverage analytical
              skills and strong attention to detail in order to deliver original
              and efficient web solutions, provide technical knowledge, build
              new websites from start to finish."
            </Typography>
            {/* <img className={classes.moon} src={moon} /> */}
          </Grid>
        </Box>
        <Box clone order={{ xs: "1", sm: "2" }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">ABOUT ME</Typography>
            <div className={classes.border}>
              <span></span>
              <span></span>
            </div>
            <Typography variant="h5">I Deliver Results</Typography>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default About;
