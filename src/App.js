import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { AboutUs } from "./pages/AboutUs";
import { OurWork } from "./pages/OurWork";
import { ContactUs } from "./pages/ContactUs";
import { MovieDetail } from "./pages/MovieDetail";
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};
