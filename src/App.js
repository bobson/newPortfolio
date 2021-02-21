import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";

import LazyShow from "./components/LazyShow";

import "./App.css";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Home />

        <About />

        <Work />
      </Container>
    </>
  );
};

export default App;
