import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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
        <Contact />
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default App;
