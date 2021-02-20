import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Particles from "react-particles-js";
import LazyShow from "./components/LazyShow";

import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 700,
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
                speed: 0.05,
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

        <Home />

        <About />

        <Work />
      </Container>
    </>
  );
};

export default App;
