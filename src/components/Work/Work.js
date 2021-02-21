import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WorkCard from "../WorkCard/WorkCard";
import BrainsterSpace from "../../assets/images/BrainsterSpace.jpg";
import Carousel from "react-material-ui-carousel";
import LazyShow from "../LazyShow";

const useStyles = makeStyles((theme) => ({
  space: { height: "86px" },
  root: {
    width: "100%",
    height: "80vh",
    // paddingBottom: "30vh",
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
  left: {
    paddingBottom: "5vh",
    paddingTop: "5vh",
    margin: 0,
  },
  textCenter: {
    // textAlign: "center",
    color: "#ff4d5a",
    fontWeight: "900",
    // position: "absolute",
    // top: "30%",
  },
  mainText: {
    color: "#0BFDD8",
  },
}));

const Work = () => {
  const classes = useStyles();
  return (
    <>
      <div id="Work" className={classes.space}></div>
      <Grid
        container
        spacing={2}
        alignItems="center"
        // justify="center"
        className={classes.root}
      >
        <Box pb={8} pt={8}>
          {/* <div className={classes.left}> */}
          <Grid item md={12} lg={4}>
            <LazyShow marginX={-200}>
              <Typography className={classes.mainText} variant="h2">
                MY WORK
              </Typography>
              <div className={classes.border}>
                <span></span>
                <span></span>
              </div>
              <Typography variant="h5">Websites</Typography>
            </LazyShow>
          </Grid>
          {/* </div> */}
        </Box>
        {/* <Box clone order={{ xs: "1", sm: "2" }}> */}
        <Grid item md={12} order={2} lg={8}>
          <LazyShow marginX={300}>
            <Carousel
              animation="slide"
              navButtonsAlwaysVisible
              stopAutoPlayOnHover={false}
            >
              <WorkCard
                image={BrainsterSpace}
                title="Brainster - Final Project"
                description="Final Project of the Braister bootcamp build with React and Bootsrap"
                demo="https://brainsterspace-slobodan.netlify.app/"
                git="https://github.com/bobson/BrainsterSpace.git"
              />
              <WorkCard
                image={BrainsterSpace}
                title="Brainster - Final Project"
                description="Final Project of the Braister bootcamp build with React and Bootsrap"
                demo="https://brainsterspace-slobodan.netlify.app/"
                git="https://github.com/bobson/BrainsterSpace.git"
              />
              <WorkCard
                image={BrainsterSpace}
                title="Brainster - Final Project"
                description="Final Project of the Braister bootcamp build with React and Bootsrap"
                demo="https://brainsterspace-slobodan.netlify.app/"
                git="https://github.com/bobson/BrainsterSpace.git"
              />
            </Carousel>
          </LazyShow>
        </Grid>
        {/* </Box> */}
      </Grid>
    </>
  );
};

export default Work;
