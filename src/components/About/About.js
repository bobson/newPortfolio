import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import image from "../../assets/images/undraw_about_me_wa29.png";
import LazyShow from "../LazyShow";

const useStyles = makeStyles((theme) => ({
  toolbar: { height: "86px" },
  root: {
    width: "100%",
    height: "80vh",
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
      background: "#FD2155",
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
    // color: "#ff4d5a",
    fontWeight: "900",
    // position: "absolute",
    // top: "30%",

    color: "white",
  },
  mainText: {
    color: "#08FDD8",
  },
  image: {
    width: "100%",
    // height: "100%",
    // zIndex: -1,
    // position: "relative",
  },
  parent: {
    position: "relative",
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
            <LazyShow marginX={-200}>
              <Typography className={classes.textCenter} variant="subtitle2">
                "Results-oriented Front-end Developer love using React and
                Material UI, dedicated to creating and optimizing interactive,
                user-friendly, and feature-rich websites. Leverage analytical
                skills and strong attention to detail in order to deliver
                original and efficient web solutions, provide technical
                knowledge, build new websites from start to finish."
              </Typography>
            </LazyShow>
          </Grid>
        </Box>
        <Box clone order={{ xs: "1", sm: "2" }}>
          <Grid item xs={12} sm={6}>
            <LazyShow marginX={300}>
              <Typography className={classes.mainText} variant="h2">
                ABOUT ME
              </Typography>
              <div className={classes.border}>
                <span></span>
                <span></span>
              </div>
              <Typography variant="h5">I Deliver Results</Typography>
            </LazyShow>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default About;
