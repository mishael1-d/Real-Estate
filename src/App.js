import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Content";
import About from "./Components/About";
import Properties from "./Components/Properties";
import FindAHome from "./Components/FindAHome";
import Contact from "./Components/Contact";
import Error from "./Components/ErrorPage";
import AppContext from "./AppContext";
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleMenuBtn = () => {
    setToggleMenu(!toggleMenu);
  };
  const hideSideBar =()=>{
    if (toggleMenu) {
      setToggleMenu(!toggleMenu)
    }
  }
  const states = {
    toggleMenu: toggleMenu,
    toggleBtn: toggleMenuBtn,
    hidebar: hideSideBar
  };
  return (
    <AppContext.Provider value={states}>
      <div className="app">
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/properties">
                <Properties />
              </Route>
              <Route exact path="/find-a-home">
                <FindAHome />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="*">
                <Error />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
