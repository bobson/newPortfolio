import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Particles from "react-particles-js";

import Button from "@material-ui/core/Button";
import LazyShow from "../LazyShow";
// import "./Home.css";
import bg from "../../assets/images/undraw_portfolio_website_lidw.png";

const theme = createMuiTheme();

theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
  },
};

const useStyles = makeStyles(() => ({
  toolbar: { height: "86px" },
  root: {
    width: "100%",
    height: "80vh",
    // background: `url(${bg})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
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

  name: {
    color: " #F50057",
  },
  textCenter: {
    // textAlign: "center",
    color: "#FD2155",
    fontWeight: "900",
    // marginBottom: "3rem",
    // position: "absolute",
    // bottom: 0,
    // right: "-60%",
    // top: 240,
  },
  mainText: {
    // color: "white",
    fontWeight: "900",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.7rem",
    },
    // zIndex: 100,
    position: "relative",
  },
  img: {
    // objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    height: "40vw",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
    backgroundColor: "#132944",
    backgroundBlendMode: "overlay",
    // marginTop: "50px",
    // zIndex: -100,
  },
  parent: {
    // position: "relative",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div id="Home" className={classes.toolbar}></div>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.1,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      {/* <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        className={classes.root}
        className={classes.root}
      > */}
      {/* <Box clone order={{ xs: "2", sm: "1" }}> */}
      {/* <Grid className={classes.parent} item xs={12} sm={4}> */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        className={classes.root}
        pt={15}
      >
        <LazyShow marginX={-30}>
          <Typography variant="h1">Hello!</Typography>
          {/* <div className={classes.border}>
              <span></span>
              <span></span>
            </div> */}
        </LazyShow>
        <LazyShow marginX={-30} delay={0.3}>
          <Typography variant="h2">
            I'm <span className={classes.name}>Slobodan Markoski</span>
          </Typography>
        </LazyShow>
        <LazyShow marginX={-30} delay={0.6}>
          <Typography variant="h2">I'm a Front-End Web Developer</Typography>
        </LazyShow>
      </Box>
      {/* </Grid> */}
      {/* </Box> */}
      {/* <Box clone order={{ xs: "1", sm: "2" }}> */}
      {/* <Grid item xs={12} order={2} sm={8}> */}
      {/* <Box display="flex" flexDirection="column" alignItems="center"> */}
      {/* <LazyShow marginX={-30}>
            <div className={classes.img}>
              <LazyShow marginX={40} delay={1}>
                <Typography className={classes.textCenter} variant="h3">
                  PORTFOLIO
                </Typography>
              </LazyShow>
            </div>
          </LazyShow>
          <LazyShow marginX={-100}></LazyShow> */}
      {/* <Button color="secondary" variant="contained">
                Let's Talk
              </Button> */}
      {/* </Box> */}
      {/* </Grid> */}
      {/* </Box> */}
      {/* </Grid> */}
    </div>
  );
};

export default Home;
